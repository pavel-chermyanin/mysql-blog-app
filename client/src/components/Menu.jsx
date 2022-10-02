import React from 'react'

const Menu = () => {
    const posts = [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://avatars.mds.yandex.net/i?id=9f9563da4c9c341e3cdb35641613b291-4601270-images-thumbs&n=13",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://avatars.mds.yandex.net/i?id=e596b2fe2e12f70dbe01787b39090ba3-5297828-images-thumbs&n=13",
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://avatars.mds.yandex.net/i?id=fd2aca1786337ca8548067950f318ccc-4245511-images-thumbs&n=13",
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://avatars.mds.yandex.net/i?id=197a2f102156a154d7f63d4853aad337-4080017-images-thumbs&n=13",
      },
    ];
  return <div className="menu">
    <h1>Other posts you may like</h1>
    {posts.map(post => (
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
        </div>
    ))}
  </div>;
}

export default Menu