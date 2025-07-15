import React, { useState } from 'react';
import { Range } from 'react-range';

const MIN = 0;
const MAX = 999999;

function Llider() {
  const [values, setValues] = useState([10000, 800000]);

  return (
    <div className="p-4 border rounded-md shadow w-64 bg-white">
      <h2 className="text-sm font-medium mb-2">Price Range</h2>

      {/* Range Slider */}
      <Range
        step={1000}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 bg-gray-300 rounded relative"
          >
            <div
              className="absolute h-2 bg-blue-500 rounded"
              style={{
                left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow"
          />
        )}
      />

      {/* Min & Max Fields */}
      <div className="flex justify-between mt-4">
        <div className="flex flex-col text-xs">
          <label>Min</label>
          <input
            type="number"
            className="border rounded px-2 py-1 text-sm w-24"
            value={values[0]}
            onChange={(e) =>
              setValues([+e.target.value, values[1]])
            }
          />
        </div>
        <div className="flex flex-col text-xs">
          <label>Max</label>
          <input
            type="number"
            className="border rounded px-2 py-1 text-sm w-24"
            value={values[1]}
            onChange={(e) =>
              setValues([values[0], +e.target.value])
            }
          />
        </div>
      </div>

      {/* Apply Button */}
      <button
        className="mt-4 w-full bg-white text-blue-600 font-semibold py-1 border border-blue-500 rounded hover:bg-blue-50"
        onClick={() => alert(`Selected: ${values[0]} to ${values[1]}`)}
      >
        Apply
      </button>
    </div>
  );
}

export default Llider;
