import { useState, useRef, useEffect } from 'react'

import {
  Box,
  Button,
  FileButton,
  Flex,
  Group,
  TextInput,
  Text,
  Image,
} from '@mantine/core'
import { RichTextEditor, Link } from '@mantine/tiptap'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight'
import type { EditPostById, UpdatePostInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import PostImageUploader from './PostImageUploader'

type FormPost = NonNullable<EditPostById['post']>

interface PostFormProps {
  post?: EditPostById['post']
  onSave: (data: UpdatePostInput, id?: FormPost['id']) => void
  error: RWGqlError
  loading: boolean
}

const PostForm = (props: PostFormProps) => {
  const { client: supabase } = useAuth()
  const [blogImageUrl, setblogImageUrl] = useState(null)
  const onSubmit = (data: FormPost) => {
    props.onSave(data, props?.post?.id)
  }

  const content = props.post?.body

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  })

  return (
    <div className="rw-form-wrapper">
      <Form<FormPost> onSubmit={onSubmit} error={props.error}>
        <Flex direction={{ base: 'column' }} gap={{ base: 'lg' }}>
          <TextInput
            id="input-title"
            placeholder="Post Title"
            withAsterisk
            label="Title"
            value={props.post?.title}
            required={true}
          />

          <RichTextEditor editor={editor}>
            <RichTextEditor.Toolbar sticky stickyOffset={60}>
              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Bold />
                <RichTextEditor.Italic />
                <RichTextEditor.Underline />
                <RichTextEditor.Strikethrough />
                <RichTextEditor.ClearFormatting />
                <RichTextEditor.Highlight />
                <RichTextEditor.Code />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.H1 />
                <RichTextEditor.H2 />
                <RichTextEditor.H3 />
                <RichTextEditor.H4 />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Blockquote />
                <RichTextEditor.Hr />
                <RichTextEditor.BulletList />
                <RichTextEditor.OrderedList />
                <RichTextEditor.Subscript />
                <RichTextEditor.Superscript />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Link />
                <RichTextEditor.Unlink />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.AlignLeft />
                <RichTextEditor.AlignCenter />
                <RichTextEditor.AlignJustify />
                <RichTextEditor.AlignRight />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content />
          </RichTextEditor>

          <FieldError name="body" className="rw-field-error" />
          <Box
            sx={(theme) => ({
              paddingTop: theme.spacing.sm,
              textAlign: 'right',
            })}
          >
            <Button disabled={props.loading} type="submit">
              Submit
            </Button>
          </Box>
        </Flex>
      </Form>
      <PostImageUploader
        url={blogImageUrl}
        size={150}
        onUpload={(url) => {
          setblogImageUrl(url)
          // updateProfile({ username, website, avatar_url: url })
        }}
      />
    </div>
  )
}

export default PostForm
