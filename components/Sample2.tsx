import { useState } from "react";

export const Sample2 = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <h3>sample2 component</h3>
      <p>sample2</p>
      <button onClick={() => setIsLogin(!isLogin)}>click</button>
      {isLogin ? "ログイン" : "未ログイン"}
      <button role="dialog">push</button>
    </div>
  );
};
