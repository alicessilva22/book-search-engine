const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]    
    }


    type Book {
        _id: ID
        authors: [String]
        description: String!
        bookId: String
        image: String
        link: String
        title: String
    }


    type Query {
        me: User
    }

    type Auth {
        token: ID!
        user: User
    }

    input SavedBook {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String!
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBook): User
        removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;