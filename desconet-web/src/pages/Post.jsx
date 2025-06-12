import { useState } from "react";
// Certifique-se de que 'react-bootstrap' está instalado: npm install react-bootstrap bootstrap
import { Card, Button, Form, Image, Row, Col } from "react-bootstrap";



export default function Post (){

    const posts = [
      {
        id: 1,
        user: "Luizinho",
        handle: "@alberth-luiz",
        text: "Ei, pessoal! A galera da Conexão de verdade está organizando uma tarde muito especial para você sair da rotina virtual",
        hashtags: "ver mais",
        likes: 320,
        comments: 220,
        shares: 15
      },
      {
        id: 2,
        user: "Luizinho",
        handle: "@alberth-luiz",
        text: "Ola rede, o grupo da vida fora de tela está organizando uma corrida de 15km pelas ruas do Recife, venham participar",
        hashtags: "ver mais",
        likes: 320,
        comments: 210,
        shares: 12
      },
      {
        id: 3,
        user: "Luizinho",
        handle: "@alberth-luiz",
        text: "Torneio de jogos de rua. Sente falta da infância ou brincou de verdade sem celular na mão? A conexão raiz te desafia",
        hashtags: "ver mais",
        likes: 320,
        comments: 200,
        shares: 12
      },
      {
        id: 4,
        user: "Luizinho",
        handle: "@alberth-luiz",
        text: "Já imaginou passar a tarde criando algo com as próprias mãos? A equipe Desconecta e te ajuda nessa",
        hashtags: "ver mais",
        likes: 320,
        comments: 200,
        shares: 12
      }
    ];

    return (
      <div className="px-3 mt-3">
        {posts.map((post) => (
          <Card className="mb-3 shadow-sm rounded-4" key={post.id}>
            <Card.Body className="d-flex">
              <Image
                src="/Profile.png"
                roundedCircle
                width={50}
                height={50}
                className="me-3"
              />
              <div>
                <div className="fw-bold">{post.user} <span className="text-muted">{post.handle}</span></div>
                <div>{post.text} <span className="text-primary">{post.hashtags}</span></div>
                <div className="mt-2 text-muted small d-flex gap-3">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                  <span>🔁 {post.shares}</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
;
