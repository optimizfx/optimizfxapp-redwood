import { useEffect, useState } from 'react'

import { FileInput } from '@mantine/core'

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

  async function uploadAvatar(event) {
    try {
      setUploading(true)

      if (!event.target.files[0] || event.target.files.length === 0) {
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
    <div>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      ) : (
        <div
          className="avatar no-image"
          style={{ height: size, width: size }}
        />
      )}
      <div style={{ width: size }}>
        <label className="button primary block" htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload Image'}
        </label>
        {/* <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        /> */}
        <FileInput
          placeholder="Pick file"
          label="Upload Blog Image"
          withAsterisk
          onChange={setValue}
          disabled={uploading}
          // value={avatarUrl}
        />
      </div>
    </div>
  )
}

export default PostImageUploader
