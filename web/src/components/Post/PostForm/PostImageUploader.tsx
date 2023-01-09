import { useEffect, useState } from 'react'

import { Center, Container, FileInput, Image } from '@mantine/core'

import { useAuth } from '@redwoodjs/auth'

const PostImageUploader = ({ url, size, onUpload }) => {
  const { client: supabase } = useAuth()
  const [value, setValue] = useState<File | null>(null)
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  useEffect(() => {
    if (value) uploadImage(value)
  }, [value])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('images')
        .download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  async function uploadImage(value) {
    try {
      setUploading(true)

      if (!value || value.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = value
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`
      console.log(file)
      console.log(filePath)
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Container>
      {avatarUrl ? (
        <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
          <Image radius="md" src={avatarUrl} alt="Image" />
        </div>
      ) : (
        <Image
          width={200}
          height={120}
          src={null}
          alt="With default placeholder"
          withPlaceholder
        />
      )}
      <div style={{ width: size }}>
        <FileInput
          placeholder="Pick file"
          label="Upload Blog Image"
          withAsterisk
          onChange={setValue}
          disabled={uploading}
        />
      </div>
    </Container>
  )
}

export default PostImageUploader
