import React from 'react'


function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  )
  const content = props.posts.map((post) =>
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      content={post.content}
    />
  )
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

function Post(props) {
  console.log(props)
  return (
    <div key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}


function NewBlogPosts () {
  const posts = [
    {id: 1, title: 'Hello World !!!', content: 'Welcome to learning React + Django!'},
    {id: 2, title: 'Installation React', content: 'You can install React from yarn.'}
  ]

  return <Blog posts={posts} />
}


export default NewBlogPosts
