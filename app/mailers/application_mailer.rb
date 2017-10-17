class ApplicationMailer < ActionMailer::Base
  default from: 'ibf321@gmail.com'
  layout 'mailer'
  def signup_confirmation(contact)
    @contact = contact

    mail(to: contact.email, subject: "Sign Up Confirmation")
  end
end
