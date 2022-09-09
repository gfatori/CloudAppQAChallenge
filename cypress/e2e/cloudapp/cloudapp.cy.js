import HomePage from '../../pages/homePage'
import SignInPage from '../../pages/signInPage'
import SignUpPage from '../../pages/signUpPage'
import UserDashboardPage from '../../pages/userDashboardPage'
import UserSettingsPage from '../../pages/userSettingsPage'


describe('Cloud App Sign up, Log out, log in and Update Avatar', () => {
  beforeEach(() => {
    const home = new HomePage();
    home.visit()
    // cy.visit('https://getcloudapp.com/')
  })

  it('signs up, logs out, logs in and updates avatar successfully', () => {
    const newEmail = `gabriel.fatori+${Date.now()}@gmail.com`
    const newPassword = '123456@Aa'
    const imgUpload = "avatar-500x500.jpg"

    const homePage = new HomePage();
    homePage.goToSignInPage();
    
    const signInPage = new SignInPage()
    signInPage.goToSignUp();

    const signUpPage = new SignUpPage()
    signUpPage
      .signUp(newEmail, newPassword)
      .verifySuccessMessage()
      .goToDashboard()
    // botar if
    // cy.get('body')
    //   .then($body => {
    //   if ($body.find('#__BVID__31___BV_modal_content_')) {
    //     cy.get('.Icons-Close').click
    //   }
    //    else {
    //     return
    //    }
    // })
    const userDashboardPage = new UserDashboardPage()
    userDashboardPage
    .signOut()
    .verifySuccessMessage()

    signInPage
      .signIn(newEmail, newPassword)
      .verifySuccessMessage()

    userDashboardPage
      .goToUserSettingsPage()

    const userSettingsPage = new UserSettingsPage()
    userSettingsPage
      .updateUserAvatar(imgUpload)
      .verifySuccessMessage()
  })
})