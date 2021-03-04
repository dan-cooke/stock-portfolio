import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Portfolio = {
  __typename?: 'Portfolio';
  cash?: Maybe<Scalars['Float']>;
  openPositions?: Maybe<Array<Position>>;
};

export type Position = {
  __typename?: 'Position';
  symbol: Scalars['String'];
  numberOfShares: Scalars['Float'];
  changeUSD: Scalars['Float'];
  changePercent: Scalars['Float'];
  averagePrice: Scalars['Float'];
  costBasis: Scalars['Float'];
  currentPrice: Scalars['Float'];
  profitLossPercent: Scalars['Float'];
  profitLossUSD: Scalars['Float'];
  dailyProfitLossUSD: Scalars['Float'];
  exposure: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  portfolio?: Maybe<Portfolio>;
};

export type PositionInput = {
  symbol: Scalars['String'];
  numberOfShares: Scalars['Float'];
  averagePrice: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPosition?: Maybe<Portfolio>;
  addCash?: Maybe<Portfolio>;
  closePosition?: Maybe<Portfolio>;
};


export type MutationAddPositionArgs = {
  position: PositionInput;
};


export type MutationAddCashArgs = {
  amountInUSD: Scalars['Float'];
};


export type MutationClosePositionArgs = {
  symbol: Scalars['String'];
  numberOfShares: Scalars['Float'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Portfolio: ResolverTypeWrapper<Portfolio>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Position: ResolverTypeWrapper<Position>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  PositionInput: PositionInput;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Portfolio: Portfolio;
  Float: Scalars['Float'];
  Position: Position;
  String: Scalars['String'];
  Query: {};
  PositionInput: PositionInput;
  Mutation: {};
  Boolean: Scalars['Boolean'];
}>;

export type PortfolioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Portfolio'] = ResolversParentTypes['Portfolio']> = ResolversObject<{
  cash?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  openPositions?: Resolver<Maybe<Array<ResolversTypes['Position']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numberOfShares?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  changeUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  changePercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  averagePrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  costBasis?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  currentPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  profitLossPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  profitLossUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dailyProfitLossUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  exposure?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  portfolio?: Resolver<Maybe<ResolversTypes['Portfolio']>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addPosition?: Resolver<Maybe<ResolversTypes['Portfolio']>, ParentType, ContextType, RequireFields<MutationAddPositionArgs, 'position'>>;
  addCash?: Resolver<Maybe<ResolversTypes['Portfolio']>, ParentType, ContextType, RequireFields<MutationAddCashArgs, 'amountInUSD'>>;
  closePosition?: Resolver<Maybe<ResolversTypes['Portfolio']>, ParentType, ContextType, RequireFields<MutationClosePositionArgs, 'symbol' | 'numberOfShares'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Portfolio?: PortfolioResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
