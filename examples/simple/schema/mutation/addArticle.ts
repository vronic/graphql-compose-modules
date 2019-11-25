import { ArticleTC, addArticle } from '../../models/article';

export default {
  type: ArticleTC,
  args: {
    title: 'String!',
    text: 'String',
    authorId: 'Int',
  },
  resolve: (_, args) => addArticle(args),
};
