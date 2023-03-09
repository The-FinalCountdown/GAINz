import React, { useState } from 'react';

const Legs = () => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
  }



  return (
    <div>
      <h1>Legs</h1>
      <ul>
        <li>
          <input type="checkbox" id="item1" name="item1" value="item1" />
          <label for="item1">Warm up: 5-10 minutes of cardio, such as jogging or jumping jacks</label>
        </li>
        <li>
          <input type="checkbox" id="item2" name="item2" value="item2" />
          <label for="item2">Barbell Squats or Dumbbell Squats: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item3" name="item3" value="item3" />
          <label for="item3">Lunges: 3 sets of 8-10 reps per leg</label>
        </li>
        <li>
          <input type="checkbox" id="item4" name="item4" value="item4" />
          <label for="item4">Leg Press: 3 sets of 10-12 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item5" name="item5" value="item5" />
          <label for="item5">Leg Curls: 3 sets of 10-12 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item6" name="item6" value="item6" />
          <label for="item6">Calf Raises: 3 sets of 12-15 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item9" name="item9" value="item9" />
          <label for="item9">Cool down: 5-10 minutes of stretching</label>
        </li>
      </ul>
      <button className="complete" onClick={handleComplete}>
        {completed ? 'WORKOUT COMPLETED' : 'COMPLETE WORKOUT'}
      </button>    </div>
  );
}

export default Legs;
