import { Link, routes } from '@redwoodjs/router'
const Article = ({ article }) => {
  return (
    <article key={article.id} className="p-5">
      <header>
        <h2 className="text-lg font-bold text-slate-900">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p className="text-slate-600">{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
