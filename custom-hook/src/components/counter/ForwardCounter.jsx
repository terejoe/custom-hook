import React from 'react';
import Card from '../UI/Card';
import useCounter from '../../hooks/use-counter';

export default function ForwardCounter() {
  const counter = useCounter()
  
  return (
    <Card>{counter}</Card>
  )
};
