# GraphQL REST Wrapper

## Sample Queries

### Get All Users
```
query {
  users {
    id
    name
  }
}
```

### Get Users by ID
```
query {
  user(id: "user-2") {
    id
    name
    posts {
      id
      title
      content
      published
    }
  }
}
```

## Sample Mutation

### Create a New User
```
mutation {
  createUser(name: "New User 1") {
    id
    name
  }
}
```

### Update User
```
mutation {
  updateUser(id: "user-123", name: "New User Name") {
    id
    name
  }
}
```

### Delete User
```
mutation {
  deleteUser(id: "user-123") {
    id
    name
  }
}
```
## Sample Subscription

### List to count
```
subscription {
  count
}
```
