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

type FormPost = NonNullable<EditPostById['post']>

interface PostFormProps {
  post?: EditPostById['post']
  onSave: (data: UpdatePostInput, id?: FormPost['id']) => void
  error: RWGqlError
  loading: boolean
}

const PostForm = (props: PostFormProps) => {
  const { client: supabase } = useAuth()
  const [uploading, setUploading] = useState(false)
  const [blogImageUrl, setblogImageUrl] = useState(null)
  const resetRef = useRef<() => void>(null)
  const onSubmit = (data: FormPost) => {
    props.onSave(data, props?.post?.id)
  }

  const clearFile = () => {
    setFile(null)
    resetRef.current?.()
  }

  const content = ''

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  })

  useEffect(() => {
    if (blogImageUrl) downloadImage(blogImageUrl)
  }, [blogImageUrl])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path)
      if (error) {
        throw error
      }
      const blogImageUrl = URL.createObjectURL(data)
      setblogImageUrl(blogImageUrl)
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  async function uploadBlogImage(event) {
    try {
      setUploading(true)
      console.log(event.target)
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }
      onUpload(filePath)
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="rw-form-wrapper">
      {blogImageUrl ? <Image src={blogImageUrl} /> : <div>No image</div>}
      <Form<FormPost> onSubmit={onSubmit} error={props.error}>
        <Flex direction={{ base: 'column' }} gap={{ base: 'lg' }}>
          <TextInput
            id="input-title"
            placeholder="Post Title"
            withAsterisk
            label="Title"
          />

          {/* <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextField
          name="body"
          defaultValue={props.post?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" /> */}

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

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.CodeBlock />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content />
          </RichTextEditor>
          <>
            <Group position="left">
              <FileButton
                resetRef={resetRef}
                onChange={uploadBlogImage}
                accept="image/png,image/jpeg"
              >
                {(props) => <Button {...props}>Upload image</Button>}
              </FileButton>
              <Button disabled={!blogImageUrl} color="red" onClick={clearFile}>
                Reset
              </Button>
            </Group>
            {blogImageUrl && (
              <Text size="sm" align="left" mt="sm">
                Picked file: {blogImageUrl.name}
              </Text>
            )}
          </>
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
    </div>
  )
}

export default PostForm
