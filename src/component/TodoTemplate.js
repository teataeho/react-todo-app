import React from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

  // 서버에 할일 목록(json)을 요청(fetch)해서 받아와야 함.
  const todos = [
    {
      id: 1,
      title: '아침 산책하기',
      done: true
    },
    {
      id: 2,
      title: '헬스하기',
      done: true
    },
    {
      id: 3,
      title: '수업 듣다 졸기',
      done: false
    },
    {
      id: 4,
      title: '수업째기',
      done: true
    }
  ]

  return (
    <div className='TodoTemplate'>
        <TodoHeader />
        <TodoMain todoList={todos} />
        <TodoInput />
    </div>
  );
}

export default TodoTemplate;