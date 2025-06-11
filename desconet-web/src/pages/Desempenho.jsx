import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import styles from "../styles/Desempenho.module.css";

const data = [
  {
    name: 'Item 1',
    serie1: 4,
    serie2: 6,
  },
  {
    name: 'Item 2',
    serie1: 12,
    serie2: 13,
  },
  {
    name: 'Item 3',
    serie1: 15,
    serie2: 17,
  },
];


export default function Desempenho() {
 return (
<div className={styles.container}>
      <div className={styles.usageBox}>
        <div className={styles.usageHeader}>
          <span>Tempo de uso Semanal</span>
          <span className={styles.dropdown}>▼</span>
        </div>
        <h2 className={styles.hours}>32 horas</h2>
      </div>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="serie1" fill="#89CFF0" />
            <Bar dataKey="serie2" fill="#00BFFF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.connections}>
        <h3>Suas conexões</h3>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img src="https://via.placeholder.com/40" alt="Joana" />
            <div>
              <div className={styles.name}>Joana Bezerra</div>
              <div className={"styles.infoPositive"}>Cod: 123 Positivo</div>
            </div>
          </div>
          <div className={styles.card}>
            <img src="https://via.placeholder.com/40" alt="Joana" />
            <div>
              <div className={styles.name}>Joana Beze</div>
              <div className={styles.infoNegative}>Cod: 123 Negativo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}