import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
mutation User(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phone: String!
    $subscribed: Boolean!
    $role: UserRoleType!
) {

    userRegister(
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone:$phone
        password: $password
        subscribed:$subscribed
        role:$role
        )
    {
      _id
        email
      username
      firstName
    }
    }
`

export const LOGIN_USER = gql`
mutation UserLogin(
    $email: String!
     $password: String!
)
{
    login(
      email: $email
      password: $password
    )
    {
     userId
      token
    }
}
`

