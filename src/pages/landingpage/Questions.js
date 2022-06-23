/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import img from '../../img/5.png';
import classes from './Question.module.css';

export default function Questions({ data1, fontSize }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const arr = [
    {
      _id: 1,
      question: data1.q1,
      answer: data1.a1
    },
    {
      _id: 2,
      question: data1.q2,
      answer: data1.a2
    },
    {
      _id: 3,
      question: data1.q3,
      answer: data1.a3
    },
    {
      _id: 4,
      question: data1.q4,
      answer: data1.a4
    },
    {
      _id: 5,
      question: data1.q5,
      answer: data1.a5
    }
  ];

  return (
    <div
      className={classes.questionContainer}
      id="questions"
      style={{ height: `${fontSize === 8 ? 'auto' : ''}` }}
    >
      <h3
        style={{
          textAlign: 'center',
          fontWeight: 'bolder',
          fontSize: 28 + fontSize,
          color: 'white',
          paddingBottom: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span>
          <img src={img} alt="" width="50px" style={{ marginRight: '10px' }} />
        </span>
        {data1.main}{' '}
      </h3>
      {arr.map((item) => {
        return (
          <Accordion
            expanded={expanded === `${item._id}`}
            onChange={handleChange(`${item._id}`)}
            key={item._id}
          >
            <AccordionSummary
              expandIcon={<Icon icon="ic:round-expand-more" />}
              aria-controls={item._id}
              id={item._id}
            >
              <Typography style={{ fontSize: 22 + fontSize }}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: 16 + fontSize }}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
