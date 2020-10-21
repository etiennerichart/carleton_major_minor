import React, {useState, useEffect} from 'react';
import './App.css';
import { departments } from './data'
import { taken } from './taken'

function App() {
  return (
    <div className="App">
      <List departments={departments}></List>
    </div>
  );
}

const List = ({departments}) => {
  return (
  <>
    {departments.map((department) => {
      return <Department key={department.department} department={department} />
    })}
  </>);
} 

const Department = ({department}) => {
  const [showDetails, setShowDetails] = useState(false);
  const onClick = () => {
    setShowDetails(!showDetails);
  } 
  return ( 
    <>
      <button type='button' className='btn btn-warning' onClick={onClick}><h1 className="departments">{department.department}</h1></button>
      <div className={ showDetails ? '' : 'hidden'}>
        <Requirements key={department.department} {...department} /> 
        <Capstone key={department.department + 'capstone'} {...department} />
        <Other key={department.department + 'other'} {...department} />
      </div>
      
    </>
  );
  
}

const Requirements = ({requirements, classes}) => {
  if (requirements !== undefined) {
    return (
      <>
        <h2>Requirements</h2>
        {requirements.class.map((course) => {
          return (
            <>
            <Course key={course} name={course} classes={classes} />
            </>
          )
        })}
      </>
    )
  }
  else {
    return null;
  }
}

const Capstone = ({requirements, classes}) => {
  if (requirements !== undefined) {
    return (
      <>
        <h2>Capstone</h2>
        {requirements.capstone.map((course) => {
          return (
            <>
            <Course key={course} name={course} classes={classes} />
            </>
          )
        })}
      </>
    )
  }
  else {
    return null;
  }
}

const Other = ({requirements, classes}) => {
  if (classes !== undefined) {
    const other = (() => {
      if (requirements.class !== undefined && requirements.capstone !== undefined) {
        return Object.keys(classes).filter((course) => !(requirements.class.includes(course)||requirements.capstone.includes(course)));
      }
      else if (requirements.capstone !== undefined) {
        return Object.keys(classes).filter((course) => !requirements.class.includes(course));
      }
      else if (requirements.class !== undefined) {
        return Object.keys(classes).filter((course) => !requirements.capstone.includes(course));
      }
      else {
        return classes;
      }
    })();
    console.log(other);
    return (
      <>
        <h2>Other</h2>
        {other.map((course) => {
          return (
            <>
            <Course key={course} name={course} classes={classes} />
            </>
          );
        })}
      </>
    );
  }
  else {
    return null;
  }

}

const Course = ({name, classes}) => {
  const [status, setStatus] = useState('danger');
  const check = (prereq) => {
    if (prereq.startsWith('AP')) {
      let index = prereq.indexOf('<');
      let slice = prereq.slice(0, index)
      let score = prereq[index + 1];
      for( let x = 0; x < taken.length; x++){
        if (taken[x].startsWith(slice)) {
          if (taken[x][index + 1] >= score) {
            return true;
          }
          else {
            return false;
          }
        }
      }
    }
    else if(prereq === '$or') {
      return 0;
    }
    else if(prereq === '$and'){
      return 1;
    }
    else if(taken.includes(prereq)){
      return true;
    }
    else {
      return false
    }
  }
  const checkHelper = (arr, pos) => {
    let y = '';
    let val1, val2;
    while ((y === 0 || y === 1 || y === '')) {
      if(y === 0){
        [val1, pos] = checkHelper(arr, pos + 1);
        [val2, pos] = checkHelper(arr, pos + 1);
        y = val1 || val2;
      }
      else if (y === 1) {
        [val1, pos] = checkHelper(arr, pos + 1);
        [val2, pos] = checkHelper(arr, pos + 1);
        y = val1 && val2;
      }
      else {
        y = check(arr[pos])
      }
    }
    return [y, pos]
  }
  
  useEffect(() => {
    if (classes[name] !== undefined){
      let z = false;
      if (taken.includes(name)){
        setStatus('success');
        console.log('A');
        z = true;
      }
      else if (classes[name].skip !== undefined ){
        console.log('B');
        const isSkipable = checkHelper(classes[name].skip, 0)[0];
        if (isSkipable) {
          setStatus('success');
          z = true;
        }
      }
      if (classes[name].prereq !== undefined && !z){
        console.log('C');
        const isMet = checkHelper(classes[name].prereq, 0)[0];
        isMet ? setStatus('info') : setStatus('warning')
      }
    }
  }, []);

  return (
    <>
    <button type="button" className={`btn btn-${status}`}>{name}</button>
    </>
  )
}

export default App;
