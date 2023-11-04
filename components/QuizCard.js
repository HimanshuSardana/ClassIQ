"use client"

import React, { useState, useEffect } from 'react';
import { Card } from '@mantine/core';
export const QuizCard = () => {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    fetch('/api/get-all-quiz') // Assuming your API route is at /api/get-all-quiz
      .then((response) => console.log(response.json()))
      .then((data) => setQuizData(data.data))
      .catch((error) => console.error('Error:', error));
  }, []);
console.log(quizData)
  return (
    <div>
      {quizData && quizData.map((quiz, index) => (
       <Card mt="3%" shadow="sm" padding="md" radius="md" w="200%" key={index}>
       <Flex ml="2%" align={"center"} justify={"space-between"}>
           <Flex direction={"column"}>
               <Text fw="700" size="md">
                   {quiz.name}
               </Text>
               <Text size="xs" c="dimmed">
                   {quiz.subtitle}
               </Text>
           </Flex>
           <Flex gap={5}>
               <Button
                   disabled={quiz.attempted == "no" ? true : false}
                   variant="light"
               >
                   Attempt
               </Button>
               <Button
                   disabled={quiz.attempted == "yes" ? true : false}
                   variant="subtle"
                   color="green"
               >
                   View Result
               </Button>
           </Flex>
       </Flex>
   </Card>
      ))}
    </div>
  );
};
