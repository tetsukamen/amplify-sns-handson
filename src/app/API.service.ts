/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreatePostInput = {
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type ModelPostConditionInput = {
  type?: ModelStringInput | null;
  content?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Post = {
  __typename: "Post";
  type?: string;
  id?: string | null;
  content?: string;
  owner?: string | null;
  timestamp?: number;
};

export type DeletePostInput = {
  id?: string | null;
};

export type ModelPostFilterInput = {
  type?: ModelStringInput | null;
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items?: Array<Post | null> | null;
  nextToken?: string | null;
};

export type ModelIntKeyConditionInput = {
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreatePostMutation = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type DeletePostMutation = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type GetPostQuery = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null> | null;
  nextToken?: string | null;
};

export type ListPostsSortedByTimestampQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null> | null;
  nextToken?: string | null;
};

export type ListPostsBySpecificOwnerQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            type
            id
            content
            owner
            timestamp
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async ListPostsSortedByTimestamp(
    type?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsSortedByTimestampQuery> {
    const statement = `query ListPostsSortedByTimestamp($type: String, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPostsSortedByTimestamp(type: $type, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            type
            id
            content
            owner
            timestamp
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (type) {
      gqlAPIServiceArguments.type = type;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsSortedByTimestampQuery>(
      response.data.listPostsSortedByTimestamp
    );
  }
  async ListPostsBySpecificOwner(
    owner?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsBySpecificOwnerQuery> {
    const statement = `query ListPostsBySpecificOwner($owner: String, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPostsBySpecificOwner(owner: $owner, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            type
            id
            content
            owner
            timestamp
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsBySpecificOwnerQuery>(
      response.data.listPostsBySpecificOwner
    );
  }
  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;
}
