import React, { useState } from "react";

function FullBody() {
  const [isComplete, setIsComplete] = useState(false);

  const handleCompleteClick = () => {
    setIsComplete(true);
  };

  return (
    <div>
      <h1>FullBody</h1>
      <ul>
        <li>
          <input type="checkbox" id="item1" name="item1" value="item1" />
          <label htmlFor="item1">
            Warm up: 5-10 minutes of cardio, such as jogging or jumping jacks
          </label>
        </li>
        <li>
          <input type="checkbox" id="item2" name="item2" value="item2" />
          <label htmlFor="item2">Squats: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item3" name="item3" value="item3" />
          <label htmlFor="item3">
            Lunges: 3 sets of 8-10 reps per leg
          </label>
        </li>
        <li>
          <input type="checkbox" id="item4" name="item4" value="item4" />
          <label htmlFor="item4">
            Push-Ups or Assisted Push-Ups: 3 sets of 8-10 reps
          </label>
        </li>
        <li>
          <input type="checkbox" id="item5" name="item5" value="item5" />
          <label htmlFor="item5">Dumbbell Rows: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item6" name="item6" value="item6" />
          <label htmlFor="item6">
            Dumbbell Shoulder Press: 3 sets of 8-10 reps
          </label>
        </li>
        <li>
          <input type="checkbox" id="item7" name="item7" value="item7" />
          <label htmlFor="item7">Deadlifts: 3 sets of 8-10 reps</label>
        </li>
        <li>
          <input type="checkbox" id="item8" name="item8" value="item8" />
          <label htmlFor="item8">
            Plank or Modified Plank: 3 sets of 30-60 seconds
          </label>
        </li>
        <li>
          <input type="checkbox" id="item9" name="item9" value="item9" />
          <label htmlFor="item9">
            Cool down: 5-10 minutes of stretching
          </label>
        </li>
      </ul>
      <button
        className="complete"
        onClick={handleCompleteClick}
        disabled={isComplete}
      >
        {isComplete ? "WORKOUT COMPLETED" : "WORKOUT COMPLETE"}
      </button>
    </div>
  );
}

export default FullBody;
