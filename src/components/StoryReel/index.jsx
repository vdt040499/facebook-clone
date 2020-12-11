import React from "react";
import Story from "../Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyreel">
      <Story
        image="https://i.pinimg.com/736x/b6/5e/23/b65e235b49f98e428d500feb6664680b.jpg"
        profileSrc="https://png.pngtree.com/png-clipart/20190517/original/pngtree-staying-cute-line-firefly-illustration-png-image_4087336.jpg"
        title="Đóm"
      />
      <Story
        image="https://i.pinimg.com/736x/15/fa/33/15fa33700cefbdd7ee7f2b2a4018a5e0.jpg"
        profileSrc="https://i.pinimg.com/736x/c2/a5/2d/c2a52d77efcc0119386241e9b7e2ed9b.jpg"
        title="Trịnh Tổng"
      />
      <Story
        image="https://i.pinimg.com/originals/aa/4a/26/aa4a2600db1ae6e4a278d52450dca6db.jpg"
        profileSrc="https://vcdn-giaitri.vnecdn.net/2020/12/06/Jack1200-2-4518-1605518144-7661-1607259645.jpg"
        title="Đóm Chúa"
      />
      <Story
        image="https://i.pinimg.com/originals/47/b3/2c/47b32c87039744ad6a610e6c31a453d3.jpg"
        profileSrc="https://cuoifly.tuoitre.vn/1200/900/ttc/r/2020/11/07/124029837-1491303771257676-1340519486941101085-n-1604712860-16x9.jpg"
        title="Meomeo"
      />
      <Story
        image="https://i.pinimg.com/originals/f9/df/2e/f9df2e5dcbeeb4adc22351918051291a.jpg"
        profileSrc="https://cuoifly.tuoitre.vn/820/0/ttc/r/2020/03/07/87493949-888348224961641-1925515705168429056-o-1583543907.jpg"
        title="J97"
      />
    </div>
  );
}

export default StoryReel;
