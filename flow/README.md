## || Working Flow


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



### ⏳ Loading Fallback

**Concept:** Showing a loading spinner or message while data is being fetched.
 const [loading, setLoading] = useState(true);
 call when data is fetched:
 setLoading(false)

 - npm i react-spinners
 


```
{/* Apps Grid + Loading | Container*/}
                {
                    loading ? (
                        <div className='flex justify-center mx-auto py-7'>
                            <HashLoader color='#632EE3'></HashLoader>
                        </div>

                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {
                                apps.map((app, index) => <AppCard
                                    key={index}
                                    app={app}></AppCard>)
                            }
                        </div>
                    )
                }
```


### Slice() Methods
to show fix number of data showing like (9 cards)
apps.slice(0, 9).map((app, index) => </AppCard>)..


