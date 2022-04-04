import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>What is Context Api?</h1>
          
            <p>Context Api is a new feature added to React.Due to this feature,it helps React App to produce global variables that can passed easily.Context Api is an alternative to Props Drilling in which props move from Grand parent to children and also to parent.In Context Api, we use React.createContext().React.createContext() returns a consumer and a provider. Provider,as name suggests provides the state to children.Consumer is a component that consumes ans uses the state.Context Api helps us to remove the problems of props drilling. </p> 
        
            <h1>What is Semantics?</h1>
            
            <p>Semantics tags are used in Html5.It is an unique features of Html 5.All the versions before Html 5 don't have Semantic tags.Examples of Semantic Tags are the Form Tag,Header tag,Article Tag. Non Semantic Tags are div and span.Semantic Tag clearly defines iis contents.These tags are very useful to web devolopers and it helps to arrange codes in a proper manner.The sementic tag are those tags  which describes meaning to both the browser and devolopers.4 </p>
        </div>
    );
};

export default Blogs;