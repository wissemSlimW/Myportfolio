import { Fragment, useCallback, useLayoutEffect, useState } from "react";
import { useTheme } from "react-jss";
import { useNavigate } from "react-router";
import { joinStyleClasses, rotateArrayLeft } from "../../Utils";
import { useSliderStyles } from "./Slider.style";
import { SliderProps } from "./type";

export const Slider = (props: SliderProps) => {
  const theme = useTheme<AppTheme>();
  const classes = useSliderStyles({ theme });
  const [animationClass, setAnimationClass] = useState("");
  const [list, setList] = useState(props.list);
  const timeRunning = 1000;
  const timeAutoNext = 7000;
  let timeout: number;
  let autoRun: number;
  const navPrev = useCallback(() => {
    clearTimeout(timeout);
    clearTimeout(autoRun);
    setList((prev) => rotateArrayLeft(prev, prev.length - 1));
    console.log(list.map((l) => l.title));
    setAnimationClass(classes.prev);
    setTimeout(() => setAnimationClass(""), timeRunning);
    autoRun = setTimeout(() => {
      navNext();
    }, timeAutoNext);
  }, [classes.prev]);
  const navNext = useCallback(() => {
    clearTimeout(autoRun);
    clearTimeout(timeout);
    setList((prev) => rotateArrayLeft(prev, 1));
    setAnimationClass(classes.next);
    setTimeout(() => setAnimationClass(""), timeRunning);
    autoRun = setTimeout(() => {
      navNext();
    }, timeAutoNext);
  }, [classes.next]);
  useLayoutEffect(() => {
    clearTimeout(autoRun);
    autoRun = setTimeout(() => {
      navNext();
    }, timeAutoNext);
    return () => {
      clearTimeout(autoRun);
      clearTimeout(timeout);
    };
  }, [navNext]);

  return (
    <div className={joinStyleClasses(classes.container, animationClass)}>
      <div className={classes.list}>
        {list.map((item, index) => (
          <Fragment key={index}>
            {<Item item={item} showAnimation={!index} />}
          </Fragment>
        ))}
      </div>
      <div className={classes.thumbnails}>
        {rotateArrayLeft(list, 1).map((item) => (
          <div className={classes.thumbnail} key={item.id}>
            <img
              className={classes.thumbImg}
              src={item.mainImage}
              alt="thumbnail image"
            />
            <div className={classes.thumbContent}>
              <span className={classes.thumbTitle}>{item.title}</span>
              <span className={classes.thumbDescription}>Description</span>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.arrows}>
        <span className={classes.arrowBtn} onClick={navPrev}>
          <button>{"<"}</button>
        </span>
        <span className={classes.arrowBtn} onClick={navNext}>
          <button>{">"}</button>
        </span>
      </div>
      <div className={classes.time}></div>
    </div>
  );
};

const Item = (props: { item: Project; showAnimation: boolean }) => {
  const theme = useTheme<AppTheme>();
  const classes = useSliderStyles({ theme });
  const navigate = useNavigate();
  return (
    <div
      key={props.item.id}
      className={joinStyleClasses(
        classes.item,
        props.showAnimation ? classes.itemAnimation : ""
      )}
    >
      <img
        className={classes.itemImg}
        src={props.item.mainImage}
        alt="project wallpaper"
      />
      <div className={classes.content}>
        <h3 className={classes.title}>{props.item.title}</h3>
        <div className={classes.description}>
          <p>{props.item.description}</p>
        </div>
        <div className={classes.btns}>
          <button
            className={classes.btn}
            onClick={() => navigate(`/projects/${props.item.id}`)}
          >
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
};
