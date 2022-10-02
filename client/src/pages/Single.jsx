import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://avatars.mds.yandex.net/i?id=ed6500c9f0ecece27c3418ef0b1122e3-4599578-images-thumbs&n=13"
          alt=""
        />
        <div className="user">
          <img
            src="https://avatars.mds.yandex.net/i?id=ed6500c9f0ecece27c3418ef0b1122e3-4599578-images-thumbs&n=13"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, qui?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          magnam dolore voluptate ipsam nisi, iusto sint quia! Illum ipsa atque
          similique beatae dolores natus quisquam ex mollitia dolorum fugiat,
          saepe expedita reprehenderit, sed quasi inventore laboriosam
          consectetur eius ab amet voluptates! Dolores veritatis quos magnam
          fugit blanditiis excepturi voluptatum, totam quasi similique
          doloremque ab fugiat, rem possimus perspiciatis nemo iure labore
          placeat et quis repellat laudantium quaerat. Sint ducimus tempora ea
          quia nulla officiis veniam dignissimos voluptatibus placeat sed
          voluptatem nostrum error autem, tempore fugiat quos in. Dolores
          reiciendis enim modi molestias. Perferendis dolor temporibus sit
          accusantium repellendus corporis nostrum.
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
