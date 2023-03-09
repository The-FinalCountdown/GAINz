import React, { useState } from 'react';

const Push = () => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
  }

  return (
    <div>
      <h1>Push</h1>
      <br />
      <ul>
        <li>
          <input type="checkbox" id="item1" name="item1" value="item1" />
          <label htmlFor="item1">Warm up: 5-10 minutes of cardio, such as jogging or jumping jacks</label>
        </li>
        <li>
          <input type="checkbox" id="item2" name="item2" value="item2" />
          <label htmlFor="item2">Push-Ups: 2 sets of 10-12 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item3" name="item3" value="item3" />
          <label htmlFor="item3">Dumbbell Chest Press: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item4" name="item4" value="item4" />
          <label htmlFor="item4">Overhead Press: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item5" name="item5" value="item5" />
          <label htmlFor="item5">Dumbbell Lateral Raise: 3 sets of 12-15 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item6" name="item6" value="item6" />
          <label htmlFor="item6">Triceps Dips: 2 sets of 10-12 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item7" name="item7" value="item7" />
          <label htmlFor="item7">Triceps Extensions: 3 sets of 10-12 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item8" name="item8" value="item8" />
          <label htmlFor="item8">Cable Chest Fly: 3 sets of 10-12 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item9" name="item9" value="item9" />
          <label htmlFor="item9">Cool down: 5-10 minutes of stretching</label>
        </li>
      </ul>
      <button className="complete" onClick={handleComplete}>
        {completed ? 'WORKOUT COMPLETED' : 'COMPLETE WORKOUT'}
      </button>
    </div>
  );
}

export default Push;

