import React, { useState } from 'react';
import Status from '../status/Status';

const Groups = ({ showStatus }) => {
  const [groupData, setGroupData] = useState([
    {
      groupName: 'Group1',
      rangeStart: '',
      rangeEnd: '',
    },
  ]);

  const handleAddGroup = () => {

    const newGroup = {
      groupName: `Group${groupData.length + 1}`,
      rangeStart: '',
      rangeEnd: '',
    };

    setGroupData(prevGroupData => [...prevGroupData, newGroup]);
  };

  const handleDelete = (index) => {
    const updatedGroups = groupData.filter((_, i) => i !== index);
    setGroupData(updatedGroups);
  };


  return (
    <div className='w-full h-full m-6'>
      {groupData.map((group, index) => (
        <div className = "flex items-center">
          <img onClick={()=>{handleDelete(index)}} className='w-10 h-10 items-center cursor-pointer mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADo6Ojb29vl5eVycnJhYWHW1tbZ2dlISEjQ0NB4eHi6urpBQUHw8PD19fWDg4Ojo6NRUVEmJiaGhobExMSWlpZ9fX1mZma8vLyrq6uLi4sXFxcMDAxNTU0eHh6wsLAzMzMuLi6enp49PT0RERHBlnbyAAAETUlEQVR4nO2da3eiMBCGpeLaAoJYL9Vq0d32///FrQkEu2ebZMzIxJ73+dzzMk/lEgIZRiMAAAAAgKsos90yn9DIl7uslC7cj2o3S65ltquky3dSvV6tp1lG7ljsAwWT5FBIS9jIg/3O5NIa37NgEUySN2mR7+ASTJKFtMr/4dlFNVHuqAWjYJJEeLqpvlb4PHuiMXv+GhDfRWN+qVenVySk9aXknL3CQEqO4qrLf1NsQ7i6L62Wj7kF/Vh0GZSzNDkzpsqYeDCF/Q5M6o/FB5bKuFiZunaBSTuTtGKpjIs121m+v+qsWSrjYtOV1QRHNV3UhqEuPsyILXxEaUa3cY3cJl1Zv4KjfnVRE4a6+IAhARgK8fMNzbk0/BS/4YvixNz+boOjtl1UZDfBT7oqjuFyO4h/YojipFIX6gXHnTljFC9ZXU+ZoqZ1nTFFAQAAAOAbyvR+8Zkov5h1vkucU+Uv0hUG82IXPErXx8DRaniSLo+Bd6uhdHUs/Pjf0P5s6N7PpGf+WA1H17+TFgvOiZTNQbrEID48HrGX43smtqf/AAAAwB2RHWN8jMBXVXZ+w2Ufm2N2XhXQsFQ1bUd8cSlmjFW9t1lxvUD/1lZlv6H3on/PLKZ3Bft3IcOH2uPIDcfBWTCUAYYUYCgDDCnAUAYYUoChDDCkAEMZYEgBhjLAkAIMZYAhBRj2ZD7zz2nm027BGSVhqNY6O17WGaXn13VmrqJUlH2ds4Bhu3jNvnY3bZPsP6NP1PCG3YMS+5OSbhGzdTm0V9TwhqZlx6tXWbYo0yzM9nbT8IZea0inJsq2BMxrDSkMKcBQA0MFDDUwVMCQAgw1MFTAUANDBQwpwFADQwUMNTBUwJACDDUwVMBQA0MFDCnAUANDBQw1MFTAkAIMNTBUwFADQwUMKcBQA0MFDDUwVMCQAgw1MFTAUANDBQwpwFADQwUMNTBUwJACDDUwVMBQA0MFDCnAUANDBQw1MFTAkAIMNTBUwFADQwUMKcBQw2hovm0Xl+Gy+yO/zh+2NuOvtKihDB+9NtjtgNZPzI99ogQ68LT/eXtnoNLjJ2xbDDmiJLooFYck+XB98L08H2Qvrlb4xd4ZJdMJq/Rq4u/VMcwZhW5mFGAoAwwpwFAGGFKAoQwwpABDGWBIAYYywJDCzzdMIzf0aZ5tp2L8b/HR71lVeJjJ2oZnsbE1VTGEnbos2wzt0Jhp4xNDmJnO3jOEcbHviloyhK3MDuGaDR2OgvXQqQ5d2oHhqGahP/vxlGT6rdu7xQ/IwlS0Ycnrr4jJIvzbtOGUvSDD1VCR94n7I09kAMd9X479Uwz+9Lv9J828yB6lyIp5c1kM24lhlcTJikvw4gIbFaxDkNy9vcHhOghb5u4tDoztAx9XsZM2+oeaW/DzhmXh3uxgLG5zK7c9SYu1PN/uRi7LG/f2b0yT+3w5K4Dxaj2fCJHP16uYZhoAAAAAEA1/AepnU21Cx/oHAAAAAElFTkSuQmCC" />
        <div key={index} className="w-[400px] flex items-center justify-between pr-2 border border-gray-400 rounded-lg mb-2">
          <div className="text-xl font-bold border-r p-4 border-gray-400">
            {group.groupName}
          </div>

          <input
            type="number"
            min={1}
            max={10}
            className="w-20 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter another number"
            value={group.rangeStart}
            onChange={e => {
              const newValue = e.target.value;
              setGroupData(prevGroupData => {
                const updatedGroups = [...prevGroupData];
                updatedGroups[index].rangeStart = newValue;
                return updatedGroups;
              });
            }}
          />

          <div className="flex items-center justify-center border-l border-r p-4 border-gray-400">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <input
            type="number"
            min={1}
            max={10}
            className="w-20 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter another number"
            value={group.rangeEnd}
            onChange={e => {
              const newValue = e.target.value;
              setGroupData(prevGroupData => {
                const updatedGroups = [...prevGroupData];
                updatedGroups[index].rangeEnd = newValue;
                return updatedGroups;
              });
            }}
          />
        </div>
          
          <Status GroupData={group} showStatus={showStatus} />
          
          </div>
      ))}

      <button className='bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-dark-navy-blue focus:outline-none focus:ring focus:border-blue-300 mt-6' onClick={handleAddGroup}>Add Group</button>
    </div>
  );
};

export default Groups;
