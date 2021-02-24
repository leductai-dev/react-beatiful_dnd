const initialData = {
    tasks:{
        'task-1' :{id:'task-1', content: 'Take out the garbage'},
        'task-2' :{id:'task-2', content: 'Play videos game'},
        'task-3' :{id:'task-3', content: 'Change phone number'},
        'task-4' :{id:'task-4', content: 'Go to shopping'},
    },
    columns:{
        'column-1':{id: 'column-1',title:"Todo List Column 1",taskID:['task-1','task-2','task-3','task-4']},
       /*  'column-2':{id: 'column-2',title:"Todo List Column 2",taskID:['task-1','task-2','task-3',]} */
    },
    columnOrder:['column-1',/* 'column-2' */],
}
export default initialData;