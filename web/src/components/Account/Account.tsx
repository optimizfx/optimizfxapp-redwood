import { useState, useEffect } from 'react'

import { Button, Container, Group, TextInput, Stack } from '@mantine/core'

import { useAuth } from '@redwoodjs/auth'
import { toast } from '@redwoodjs/web/dist/toast'
const Account = () => {
  const { client: supabase, currentUser, logOut } = useAuth()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [supabase.auth.session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
      toast.success('Profile updated!')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <div className="row flex-center flex">
        <div className="col-6 form-widget">
          <p className="description">Your profile</p>
          <div className="form-widget">
            <Stack>
              <TextInput
                label="Email"
                id="email"
                type="text"
                value={currentUser?.email}
                disabled
              />

              <TextInput
                label="Username"
                id="username"
                type="text"
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextInput
                label="Website"
                id="website"
                type="website"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Stack>

            <Group position="right" mt="md">
              <Button
                className="button primary block"
                onClick={() => updateProfile({ username, website, avatar_url })}
                disabled={loading}
              >
                {loading ? 'Loading ...' : 'Update'}
              </Button>

              <Button color="red" className="default" onClick={() => logOut()}>
                Sign Out
              </Button>
            </Group>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Account
