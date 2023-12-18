export const getUserQuery = `

query GetUser($email:String!) {
    user(by:{email:$email}) {
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
    }
}
`;

export const createUserMutation = `mutation createUser($input:UserCreateInput!) {
    userCreate(input:$input) {
        user{
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl
        }
    }
}
`;

export const createPokerSessionMutation = `mutation createPokerSessions($input:PokerSessionsCreateInput!) {
    pokerSessionsCreate(input:$input) {
        pokerSessions{
            date
            initialAmount
            finalAmount
            profit
            host        
        }
    }
}
`;
