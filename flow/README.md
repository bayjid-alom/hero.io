## || `Working` Flow


### 📌 Data Fetching – Way 3: Using `useEffect`

#### 1. Syntax

```jsx
useEffect(() => {
    // Side effect code
}, [dependencies]);
```

- `useEffect()` handles side effects after rendering.
- `[]` runs the effect once after the initial render.
- `[dependencies]` runs the effect when dependencies change.

#### 2. Implementation

```jsx
import { useEffect, useState } from "react";

// State declare
const [apps, setApps] = useState([]);

// Data fetching - Way 03
useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("/data.json");
        const data = await res.json();
        setApps(data);
    };

    fetchData();
}, []);

console.log(apps);
```


<br>




### ⏳ Loading Fallback

**Concept:** Showing a loading spinner or message while data is being fetched.

#### 1. Loading State

```jsx
const [loading, setLoading] = useState(true);

// Call when data is fetched
setLoading(false);
```

#### 2. Install React Spinners

```bash
npm i react-spinners
```

#### 3. Delay Loading (Optional)

```jsx
setTimeout(() => {
    setApps(data);
    setLoading(false);
}, 5000);
```




#### 4. Conditional Rendering

```jsx
{/* Apps Grid + Loading | Container */}
{
    loading ? (
        <div className="flex justify-center mx-auto py-7">
            <HashLoader color="#632EE3" />
        </div>
    ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {
                apps.map((app, index) => (
                    <AppCard key={index} app={app} />
                ))
            }
        </div>
    )
}
```




---

### ✂️ Slice() Method

**Concept:** Showing a fixed number of data items (e.g., 9 cards).

```jsx
apps.slice(0, 9).map((app, index) => (
    <AppCard key={index} app={app} />
))
```

---




### 📱 Apps.jsx | All Apps Here

- Again fetch data using `useEffect()` hook.
- Declare state using `useState`.
- Use loading state for the spinner.
- Display all apps using `map()`.

#### Conditional Rendering



```jsx
{/* Apps Grid + Loading | Container */}
{
    loading ? (
        <div className="flex justify-center mx-auto py-7">
            <HashLoader color="#632EE3" />
        </div>
    ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {
                apps.map((app, index) => (
                    <AppCard key={index} app={app} />
                ))
            }
        </div>
    )
}
```

<br>






## 🪝 Custom Hooks

**Purpose:** To avoid repeating the same code in multiple components.

### 1. Create Custom Hook

- Create a `hooks` folder.
- Create a `useApps.jsx` file inside the folder.

**useApps.jsx**

```jsx
import React, { useEffect, useState } from 'react';

const useApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    // Data fetching - Way 03
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();

            setTimeout(() => {
                setApps(data);
                setLoading(false);
            }, 1500);
        };

        fetchData();
    }, []);

    return { apps, loading }; // Must return
};

export default useApps;
```

### 2. Use Custom Hook in Other Components

**Apps.jsx & TrendingApps.jsx**

```jsx
const { apps, loading } = useApps();
```

- Import and call `useApps()`.
- Remove the `useEffect()` and `useState()` data-fetching logic from these components.
- Use `apps` and `loading` as before.

**Note:** The same functionality will work without repeating the data-fetching code in multiple components.


<br>



### 📌 App Details 

<details>
<summary>BarChart Structure </summary>

```
<ResponsiveContainer width="100%" height="100%">
    <BarChart data={chartData} layout="vertical">

        {/* 1. X Axis */}
        <XAxis
            type="number"
            dataKey="count"
        />

        {/* 2. Y Axis */}
        <YAxis
            type="category"
            dataKey="name"
        />

        {/* 3. Bar */}
        <Bar
            dataKey="count"
            fill="#ff850e"
            barSize={17}
            radius={0}
        />

        {/* 4. Tooltip */}
        <Tooltip />

    </BarChart>
</ResponsiveContainer>

```

</details>

<br>



#### || Fix : Undefined
```
// Wait until data loads
if (loading) {
     return (
        <div className='flex min-h-[60vh] items-center justify-center'>
        <HashLoader color='#632EE3' size={35}></HashLoader>
    </div>
    );
}
```


---


