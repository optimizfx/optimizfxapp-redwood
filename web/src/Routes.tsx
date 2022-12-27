// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import LandingLayout from './layouts/LandingLayout/LandingLayout'
const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={BlogLayout}>
        <Route path="/blog" page={BlogPage} name="blog" />
      </Set>
      <Set wrap={LandingLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Private unauthenticated="login">
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Robots" titleTo="robots" buttonLabel="New Robot" buttonTo="newRobot">
          <Route path="/robots/new" page={RobotNewRobotPage} name="newRobot" />
          <Route path="/robots/{id:Int}/edit" page={RobotEditRobotPage} name="editRobot" />
          <Route path="/robots/{id:Int}" page={RobotRobotPage} name="robot" />
          <Route path="/robots" page={RobotRobotsPage} name="robots" />
        </Set>
      </Private>

      {/* no unauthenticated users can access the dashboard */}
      {/* <Private unauthenticated="home" roles="user, moderator, admin"> */}
      <Set wrap={DashboardLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/dashboard/account" page={AccountPage} name="account" />

        <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Set>

        {/* Only admins can manage users */}
        {/* <Private unauthenticated="login" roles="admin">
            <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
              <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
              <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
              <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
              <Route path="/admin/users" page={UserUsersPage} name="users" />
            </Set>
          </Private> */}
      </Set>
      {/* </Private> */}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
