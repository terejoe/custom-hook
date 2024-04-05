import React from 'react'
import useCounter from '../../hooks/use-counter';
import Card from '../UI/Card';

export default function BackwardCounter() {
  const counter = useCounter(false)
  
  return (
    <Card>{counter}</Card>
  )
};
