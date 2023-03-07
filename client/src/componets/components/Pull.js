import React from 'react';

function Pull() {
  return (
    <div>
      <h1>Pull</h1>
      <ul>
        <li>
          <input type="checkbox" id="item1" name="item1" value="item1" />
          <label for="item1">Warm up: 5-10 minutes of cardio, such as jogging or jumping jacks</label>
        </li>
        <li>
          <input type="checkbox" id="item2" name="item2" value="item2" />
          <label for="item2">Pull-Ups or Assisted Pull-Ups: 2 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item3" name="item3" value="item3" />
          <label for="item3">Dumbbell Rows: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item4" name="item4" value="item4" />
          <label for="item4">Lat Pulldowns: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item5" name="item5" value="item5" />
          <label for="item5">Barbell Deadlifts or Dumbbell Deadlifts: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item6" name="item6" value="item6" />
          <label for="item6">Bicep Curls: 3 sets of 10-12 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item7" name="item7" value="item7" />
          <label for="item7">Hammer Curls: 3 sets of 10-12 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item8" name="item8" value="item8" />
          <label for="item8">Face Pulls: 3 sets of 12-15 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item9" name="item9" value="item9" />
          <label for="item9">Cool down: 5-10 minutes of stretching</label>
        </li>
      </ul>
      <button class="complete">WORKOUT COMPLETE</button>
    </div>
  );
}

export default Pull;
