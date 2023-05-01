import React, { useState, useEffect } from 'react';
import axios, * as others from 'axios';
import './PostView.css';
import { cu_post, cu_part_id, cu_section } from '../../../urlAmiga';

export default function PostView(props) {


  const [idPost, setIdPost] = useState("");
  const [dataSections, setDataSections] = useState([]);
  const [sections, setSections] = useState([]);

  //Peticion del post 
  useState(() => { //En este state obtenemos el id del post a partir del id de la miniatura

    axios.get(`${cu_post}${cu_part_id(props.idMiniatura)}`)
      .then(post => {

       
        setIdPost(() => post.data[0]._id);

        //peticiones sections a partir de id del post
        axios.get(`${cu_section}${cu_part_id(post.data[0]._id)} `)
          .then(sections => {

            //Datos sin ordenar
            let dataArr = sections.data;
            //Se ordenan los json por la propiedad 'order'
            let orderData = dataArr.sort(function (a, b) {
              return a['order'] - b['order'];
            });
            //Se guarda el nuevo array de objectos ordenados en el estado
            setDataSections(() => orderData);

          })
          .catch(err => {
            console.log(err);
          });

      })
      .catch(err => {
        alert("No se ha podido cargar el post");
        props.close();
      });

  }, []);




  //Build sections
  if (props.open) {

    return (

      <div className="PostView" onClick={null}>

        <div className="header" onClick={null}>
          <button onClick={() => props.close()} >X</button>
        </div>

        <div className="build" >
          {
            dataSections.map(data => {

              switch (data.type) {
                case 1:
                  return <h1 key={data._id} className="sectionH1">{data.data.text}</h1>
                  break;

                case 2:
                  return <h2 key={data._id} className="sectionH2">{data.data.text}</h2>
                  break;

                case 3:
                  return <h3 key={data._id} className="sectionH3">{data.data.text}</h3>
                  break;
                case 4:
                  return <p key={data._id} className="sectionTEXT">{data.data.text}</p>
                  break;
                case 5:
                  return <img key={data._id} className="sectionIMG" src={data.data.url} alt="imagel de una seccion" />
                  break;
                case 6:
                  return <div key={data._id} className="sectionIMG_TEXT">
                    <img src={data.data.url} alt="imagen de una seccion" />
                    <p>{data.data.text}</p>
                  </div>
                  break;
                case 7:
                  return <div key={data._id} className="sectionTEXT_IMG">
                    <p>{data.data.text}</p>
                    <img src={data.data.url} alt="imagen de una seccion" />
                  </div>
                  break;
                case 9:
                  return <code key={data._id} className="sectionCODE">{data.data.text}</code>
                  break;
              }
            })
          }

          <a href="https://www.mozilla.org/en-US/MPL/2.0/" className="aLicense">Mozilla Public License Version 2.0</a>
          <span className="codebaou">CodeBaOu</span>
        </div>

      </div>
    )
  }

}

