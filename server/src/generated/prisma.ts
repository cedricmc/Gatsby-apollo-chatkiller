import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chats: <T = Chat[]>(args: { where?: ChatWhereInput, orderBy?: ChatOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cars: <T = Car[]>(args: { where?: CarWhereInput, orderBy?: CarOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    car: <T = Car | null>(args: { where: CarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chatsConnection: <T = ChatConnection>(args: { where?: ChatWhereInput, orderBy?: ChatOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    carsConnection: <T = CarConnection>(args: { where?: CarWhereInput, orderBy?: CarOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChat: <T = Chat>(args: { data: ChatCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCar: <T = Car>(args: { data: CarCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChat: <T = Chat | null>(args: { data: ChatUpdateInput, where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCar: <T = Car | null>(args: { data: CarUpdateInput, where: CarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCar: <T = Car | null>(args: { where: CarWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChat: <T = Chat>(args: { where: ChatWhereUniqueInput, create: ChatCreateInput, update: ChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCar: <T = Car>(args: { where: CarWhereUniqueInput, create: CarCreateInput, update: CarUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChats: <T = BatchPayload>(args: { data: ChatUpdateInput, where?: ChatWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCars: <T = BatchPayload>(args: { data: CarUpdateInput, where?: CarWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChats: <T = BatchPayload>(args: { where?: ChatWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCars: <T = BatchPayload>(args: { where?: CarWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    chat: <T = ChatSubscriptionPayload | null>(args: { where?: ChatSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    car: <T = CarSubscriptionPayload | null>(args: { where?: CarSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  Chat: (where?: ChatWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Car: (where?: CarWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCar {
  count: Int!
}

type AggregateChat {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Car implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type CarConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CarEdge]!
  aggregate: AggregateCar!
}

input CarCreateInput {
  name: String!
}

input CarCreateManyInput {
  create: [CarCreateInput!]
  connect: [CarWhereUniqueInput!]
}

"""An edge in a connection."""
type CarEdge {
  """The item at the end of the edge."""
  node: Car!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CarOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CarPreviousValues {
  id: ID!
  name: String!
}

type CarSubscriptionPayload {
  mutation: MutationType!
  node: Car
  updatedFields: [String!]
  previousValues: CarPreviousValues
}

input CarSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CarSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CarSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CarSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CarWhereInput
}

input CarUpdateDataInput {
  name: String
}

input CarUpdateInput {
  name: String
}

input CarUpdateManyInput {
  create: [CarCreateInput!]
  connect: [CarWhereUniqueInput!]
  disconnect: [CarWhereUniqueInput!]
  delete: [CarWhereUniqueInput!]
  update: [CarUpdateWithWhereUniqueNestedInput!]
  upsert: [CarUpsertWithWhereUniqueNestedInput!]
}

input CarUpdateWithWhereUniqueNestedInput {
  where: CarWhereUniqueInput!
  data: CarUpdateDataInput!
}

input CarUpsertWithWhereUniqueNestedInput {
  where: CarWhereUniqueInput!
  update: CarUpdateDataInput!
  create: CarCreateInput!
}

input CarWhereInput {
  """Logical AND on all given filters."""
  AND: [CarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input CarWhereUniqueInput {
  id: ID
}

type Chat implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  message: String!
  author: User
}

"""A connection to a list of items."""
type ChatConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChatEdge]!
  aggregate: AggregateChat!
}

input ChatCreateInput {
  message: String!
  author: UserCreateOneInput
}

"""An edge in a connection."""
type ChatEdge {
  """The item at the end of the edge."""
  node: Chat!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChatOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  message_ASC
  message_DESC
}

type ChatPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  message: String!
}

type ChatSubscriptionPayload {
  mutation: MutationType!
  node: Chat
  updatedFields: [String!]
  previousValues: ChatPreviousValues
}

input ChatSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChatWhereInput
}

input ChatUpdateInput {
  message: String
  author: UserUpdateOneInput
}

input ChatWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  author: UserWhereInput
}

input ChatWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createChat(data: ChatCreateInput!): Chat!
  createUser(data: UserCreateInput!): User!
  createCar(data: CarCreateInput!): Car!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCar(data: CarUpdateInput!, where: CarWhereUniqueInput!): Car
  deletePost(where: PostWhereUniqueInput!): Post
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCar(where: CarWhereUniqueInput!): Car
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCar(where: CarWhereUniqueInput!, create: CarCreateInput!, update: CarUpdateInput!): Car!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyChats(data: ChatUpdateInput!, where: ChatWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCars(data: CarUpdateInput!, where: CarWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCars(where: CarWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
  nameFile: String!
  author: User
  cars(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Car!]
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  nameFile: String!
  author: UserCreateOneWithoutPostsInput
  cars: CarCreateManyInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
  nameFile: String!
  cars: CarCreateManyInput
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  nameFile_ASC
  nameFile_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
  nameFile: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
  author: UserUpdateOneWithoutPostsInput
  cars: CarUpdateManyInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
  cars: CarUpdateManyInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  nameFile: String

  """All values that are not equal to given value."""
  nameFile_not: String

  """All values that are contained in given list."""
  nameFile_in: [String!]

  """All values that are not contained in given list."""
  nameFile_not_in: [String!]

  """All values less than the given value."""
  nameFile_lt: String

  """All values less than or equal the given value."""
  nameFile_lte: String

  """All values greater than the given value."""
  nameFile_gt: String

  """All values greater than or equal the given value."""
  nameFile_gte: String

  """All values containing the given string."""
  nameFile_contains: String

  """All values not containing the given string."""
  nameFile_not_contains: String

  """All values starting with the given string."""
  nameFile_starts_with: String

  """All values not starting with the given string."""
  nameFile_not_starts_with: String

  """All values ending with the given string."""
  nameFile_ends_with: String

  """All values not ending with the given string."""
  nameFile_not_ends_with: String
  author: UserWhereInput
  cars_every: CarWhereInput
  cars_some: CarWhereInput
  cars_none: CarWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  cars(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Car]!
  post(where: PostWhereUniqueInput!): Post
  chat(where: ChatWhereUniqueInput!): Chat
  user(where: UserWhereUniqueInput!): User
  car(where: CarWhereUniqueInput!): Car
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  carsConnection(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  ADMIN
  CUSTOMER
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  car(where: CarSubscriptionWhereInput): CarSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  emailvalidated: Boolean!
  validateEmailToken: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  password: String!
  nameFile: String!
  resetPasswordToken: String!
  resetPasswordExpires: Float
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  role: Role!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  emailvalidated: Boolean
  validateEmailToken: String!
  password: String!
  nameFile: String!
  resetPasswordToken: String!
  resetPasswordExpires: Float
  name: String!
  role: Role
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  emailvalidated: Boolean
  validateEmailToken: String!
  password: String!
  nameFile: String!
  resetPasswordToken: String!
  resetPasswordExpires: Float
  name: String!
  role: Role
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  emailvalidated_ASC
  emailvalidated_DESC
  validateEmailToken_ASC
  validateEmailToken_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  password_ASC
  password_DESC
  nameFile_ASC
  nameFile_DESC
  resetPasswordToken_ASC
  resetPasswordToken_DESC
  resetPasswordExpires_ASC
  resetPasswordExpires_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  emailvalidated: Boolean!
  validateEmailToken: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  password: String!
  nameFile: String!
  resetPasswordToken: String!
  resetPasswordExpires: Float
  name: String!
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires: Float
  name: String
  role: Role
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires: Float
  name: String
  role: Role
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires: Float
  name: String
  role: Role
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  emailvalidated: Boolean

  """All values that are not equal to given value."""
  emailvalidated_not: Boolean
  validateEmailToken: String

  """All values that are not equal to given value."""
  validateEmailToken_not: String

  """All values that are contained in given list."""
  validateEmailToken_in: [String!]

  """All values that are not contained in given list."""
  validateEmailToken_not_in: [String!]

  """All values less than the given value."""
  validateEmailToken_lt: String

  """All values less than or equal the given value."""
  validateEmailToken_lte: String

  """All values greater than the given value."""
  validateEmailToken_gt: String

  """All values greater than or equal the given value."""
  validateEmailToken_gte: String

  """All values containing the given string."""
  validateEmailToken_contains: String

  """All values not containing the given string."""
  validateEmailToken_not_contains: String

  """All values starting with the given string."""
  validateEmailToken_starts_with: String

  """All values not starting with the given string."""
  validateEmailToken_not_starts_with: String

  """All values ending with the given string."""
  validateEmailToken_ends_with: String

  """All values not ending with the given string."""
  validateEmailToken_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  nameFile: String

  """All values that are not equal to given value."""
  nameFile_not: String

  """All values that are contained in given list."""
  nameFile_in: [String!]

  """All values that are not contained in given list."""
  nameFile_not_in: [String!]

  """All values less than the given value."""
  nameFile_lt: String

  """All values less than or equal the given value."""
  nameFile_lte: String

  """All values greater than the given value."""
  nameFile_gt: String

  """All values greater than or equal the given value."""
  nameFile_gte: String

  """All values containing the given string."""
  nameFile_contains: String

  """All values not containing the given string."""
  nameFile_not_contains: String

  """All values starting with the given string."""
  nameFile_starts_with: String

  """All values not starting with the given string."""
  nameFile_not_starts_with: String

  """All values ending with the given string."""
  nameFile_ends_with: String

  """All values not ending with the given string."""
  nameFile_not_ends_with: String
  resetPasswordToken: String

  """All values that are not equal to given value."""
  resetPasswordToken_not: String

  """All values that are contained in given list."""
  resetPasswordToken_in: [String!]

  """All values that are not contained in given list."""
  resetPasswordToken_not_in: [String!]

  """All values less than the given value."""
  resetPasswordToken_lt: String

  """All values less than or equal the given value."""
  resetPasswordToken_lte: String

  """All values greater than the given value."""
  resetPasswordToken_gt: String

  """All values greater than or equal the given value."""
  resetPasswordToken_gte: String

  """All values containing the given string."""
  resetPasswordToken_contains: String

  """All values not containing the given string."""
  resetPasswordToken_not_contains: String

  """All values starting with the given string."""
  resetPasswordToken_starts_with: String

  """All values not starting with the given string."""
  resetPasswordToken_not_starts_with: String

  """All values ending with the given string."""
  resetPasswordToken_ends_with: String

  """All values not ending with the given string."""
  resetPasswordToken_not_ends_with: String
  resetPasswordExpires: Float

  """All values that are not equal to given value."""
  resetPasswordExpires_not: Float

  """All values that are contained in given list."""
  resetPasswordExpires_in: [Float!]

  """All values that are not contained in given list."""
  resetPasswordExpires_not_in: [Float!]

  """All values less than the given value."""
  resetPasswordExpires_lt: Float

  """All values less than or equal the given value."""
  resetPasswordExpires_lte: Float

  """All values greater than the given value."""
  resetPasswordExpires_gt: Float

  """All values greater than or equal the given value."""
  resetPasswordExpires_gte: Float
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  validateEmailToken: String
  resetPasswordToken: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type Role =   'ADMIN' |
  'CUSTOMER'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC' |
  'nameFile_ASC' |
  'nameFile_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CarOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ChatOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'message_ASC' |
  'message_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'emailvalidated_ASC' |
  'emailvalidated_DESC' |
  'validateEmailToken_ASC' |
  'validateEmailToken_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'password_ASC' |
  'password_DESC' |
  'nameFile_ASC' |
  'nameFile_DESC' |
  'resetPasswordToken_ASC' |
  'resetPasswordToken_DESC' |
  'resetPasswordExpires_ASC' |
  'resetPasswordExpires_DESC' |
  'name_ASC' |
  'name_DESC' |
  'role_ASC' |
  'role_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface CarCreateManyInput {
  create?: CarCreateInput[] | CarCreateInput
  connect?: CarWhereUniqueInput[] | CarWhereUniqueInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  nameFile?: String
  nameFile_not?: String
  nameFile_in?: String[] | String
  nameFile_not_in?: String[] | String
  nameFile_lt?: String
  nameFile_lte?: String
  nameFile_gt?: String
  nameFile_gte?: String
  nameFile_contains?: String
  nameFile_not_contains?: String
  nameFile_starts_with?: String
  nameFile_not_starts_with?: String
  nameFile_ends_with?: String
  nameFile_not_ends_with?: String
  author?: UserWhereInput
  cars_every?: CarWhereInput
  cars_some?: CarWhereInput
  cars_none?: CarWhereInput
}

export interface UserCreateInput {
  email: String
  emailvalidated?: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires?: Float
  name: String
  role?: Role
  posts?: PostCreateManyWithoutAuthorInput
}

export interface CarWhereInput {
  AND?: CarWhereInput[] | CarWhereInput
  OR?: CarWhereInput[] | CarWhereInput
  NOT?: CarWhereInput[] | CarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  nameFile?: String
  author?: UserUpdateOneWithoutPostsInput
  cars?: CarUpdateManyInput
}

export interface UserUpdateDataInput {
  email?: String
  emailvalidated?: Boolean
  validateEmailToken?: String
  password?: String
  nameFile?: String
  resetPasswordToken?: String
  resetPasswordExpires?: Float
  name?: String
  role?: Role
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface CarSubscriptionWhereInput {
  AND?: CarSubscriptionWhereInput[] | CarSubscriptionWhereInput
  OR?: CarSubscriptionWhereInput[] | CarSubscriptionWhereInput
  NOT?: CarSubscriptionWhereInput[] | CarSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CarWhereInput
}

export interface ChatUpdateInput {
  message?: String
  author?: UserUpdateOneInput
}

export interface ChatSubscriptionWhereInput {
  AND?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput
  OR?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput
  NOT?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChatWhereInput
}

export interface CarUpsertWithWhereUniqueNestedInput {
  where: CarWhereUniqueInput
  update: CarUpdateDataInput
  create: CarCreateInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  emailvalidated?: Boolean
  emailvalidated_not?: Boolean
  validateEmailToken?: String
  validateEmailToken_not?: String
  validateEmailToken_in?: String[] | String
  validateEmailToken_not_in?: String[] | String
  validateEmailToken_lt?: String
  validateEmailToken_lte?: String
  validateEmailToken_gt?: String
  validateEmailToken_gte?: String
  validateEmailToken_contains?: String
  validateEmailToken_not_contains?: String
  validateEmailToken_starts_with?: String
  validateEmailToken_not_starts_with?: String
  validateEmailToken_ends_with?: String
  validateEmailToken_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  nameFile?: String
  nameFile_not?: String
  nameFile_in?: String[] | String
  nameFile_not_in?: String[] | String
  nameFile_lt?: String
  nameFile_lte?: String
  nameFile_gt?: String
  nameFile_gte?: String
  nameFile_contains?: String
  nameFile_not_contains?: String
  nameFile_starts_with?: String
  nameFile_not_starts_with?: String
  nameFile_ends_with?: String
  nameFile_not_ends_with?: String
  resetPasswordToken?: String
  resetPasswordToken_not?: String
  resetPasswordToken_in?: String[] | String
  resetPasswordToken_not_in?: String[] | String
  resetPasswordToken_lt?: String
  resetPasswordToken_lte?: String
  resetPasswordToken_gt?: String
  resetPasswordToken_gte?: String
  resetPasswordToken_contains?: String
  resetPasswordToken_not_contains?: String
  resetPasswordToken_starts_with?: String
  resetPasswordToken_not_starts_with?: String
  resetPasswordToken_ends_with?: String
  resetPasswordToken_not_ends_with?: String
  resetPasswordExpires?: Float
  resetPasswordExpires_not?: Float
  resetPasswordExpires_in?: Float[] | Float
  resetPasswordExpires_not_in?: Float[] | Float
  resetPasswordExpires_lt?: Float
  resetPasswordExpires_lte?: Float
  resetPasswordExpires_gt?: Float
  resetPasswordExpires_gte?: Float
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface CarUpdateDataInput {
  name?: String
}

export interface CarUpdateInput {
  name?: String
}

export interface CarUpdateWithWhereUniqueNestedInput {
  where: CarWhereUniqueInput
  data: CarUpdateDataInput
}

export interface ChatWhereUniqueInput {
  id?: ID_Input
}

export interface CarUpdateManyInput {
  create?: CarCreateInput[] | CarCreateInput
  connect?: CarWhereUniqueInput[] | CarWhereUniqueInput
  disconnect?: CarWhereUniqueInput[] | CarWhereUniqueInput
  delete?: CarWhereUniqueInput[] | CarWhereUniqueInput
  update?: CarUpdateWithWhereUniqueNestedInput[] | CarUpdateWithWhereUniqueNestedInput
  upsert?: CarUpsertWithWhereUniqueNestedInput[] | CarUpsertWithWhereUniqueNestedInput
}

export interface CarWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  nameFile: String
  author?: UserCreateOneWithoutPostsInput
  cars?: CarCreateManyInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
  nameFile?: String
  cars?: CarUpdateManyInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  emailvalidated?: Boolean
  validateEmailToken: String
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires?: Float
  name: String
  role?: Role
}

export interface ChatWhereInput {
  AND?: ChatWhereInput[] | ChatWhereInput
  OR?: ChatWhereInput[] | ChatWhereInput
  NOT?: ChatWhereInput[] | ChatWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  message?: String
  message_not?: String
  message_in?: String[] | String
  message_not_in?: String[] | String
  message_lt?: String
  message_lte?: String
  message_gt?: String
  message_gte?: String
  message_contains?: String
  message_not_contains?: String
  message_starts_with?: String
  message_not_starts_with?: String
  message_ends_with?: String
  message_not_ends_with?: String
  author?: UserWhereInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface CarCreateInput {
  name: String
}

export interface UserUpdateInput {
  email?: String
  emailvalidated?: Boolean
  validateEmailToken?: String
  password?: String
  nameFile?: String
  resetPasswordToken?: String
  resetPasswordExpires?: Float
  name?: String
  role?: Role
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface ChatCreateInput {
  message: String
  author?: UserCreateOneInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
  nameFile: String
  cars?: CarCreateManyInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  emailvalidated?: Boolean
  validateEmailToken?: String
  password?: String
  nameFile?: String
  resetPasswordToken?: String
  resetPasswordExpires?: Float
  name?: String
  role?: Role
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  validateEmailToken?: String
  resetPasswordToken?: String
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface CarPreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface ChatPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  message: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface Post extends Node {
  id: ID_Output
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
  author?: User
  cars?: Car[]
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface AggregateCar {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  createdAt: DateTime
  updatedAt: DateTime
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires?: Float
  name: String
  posts?: Post[]
  role: Role
}

/*
 * A connection to a list of items.

 */
export interface CarConnection {
  pageInfo: PageInfo
  edges: CarEdge[]
  aggregate: AggregateCar
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  emailvalidated: Boolean
  validateEmailToken: String
  createdAt: DateTime
  updatedAt: DateTime
  password: String
  nameFile: String
  resetPasswordToken: String
  resetPasswordExpires?: Float
  name: String
  role: Role
}

export interface AggregateChat {
  count: Int
}

export interface Chat extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  message: String
  author?: User
}

/*
 * A connection to a list of items.

 */
export interface ChatConnection {
  pageInfo: PageInfo
  edges: ChatEdge[]
  aggregate: AggregateChat
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface CarSubscriptionPayload {
  mutation: MutationType
  node?: Car
  updatedFields?: String[]
  previousValues?: CarPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface ChatSubscriptionPayload {
  mutation: MutationType
  node?: Chat
  updatedFields?: String[]
  previousValues?: ChatPreviousValues
}

export interface Car extends Node {
  id: ID_Output
  name: String
}

export interface PostPreviousValues {
  id: ID_Output
  isPublished: Boolean
  title: String
  text: String
  nameFile: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface CarEdge {
  node: Car
  cursor: String
}

export interface AggregatePost {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ChatEdge {
  node: Chat
  cursor: String
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string