class HomePage {
  
  visit() {
    cy.visit('https://getcloudapp.com/');
  }

  elements = {
    loginButton : () => cy.get("#login-dblue")
  }

  goToSignInPage() {
    this.elements.loginButton().click()
    return this
  }
}

export default HomePage;