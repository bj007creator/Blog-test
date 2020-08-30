import React, { useState, useRef } from "react";

import {
  Container,
  Field,
  ImageOption,
  Menu,
  UploadIcon,
  VideoOption,
  TextOption,
  TextIcon,
  DropZone,
  Image,
  XIcon
} from "./styles";

interface HomeProps {}

interface Text {
  rows: number;
  columns: number;
  size: number;
  quantLetters: number;
  date: Date;
}

interface Midia {
  link: string;
  height: number;
  width: number;
  date: Date;
}

interface Video extends Midia {}

interface Image extends Midia {
  label: string;
}

interface Items {
  texts: Text[];
  videos: Video[];
  images: Image[];
}

const Home: React.FC<HomeProps> = () => {
  const [values, setValues] = useState<string[]>([]);
  const [videoValues, setVideoValues] = useState<string[]>([]);

  const [textOptions, setTextOptions] = useState(false);
  const [doneText, setDoneText] = useState(false);

  const [videoOptions, setVideoOptions] = useState(false);
  const [doneVideo, setDoneVideo] = useState(false);

  const [imageOptions, setImageOptions] = useState(false);
  const [doneImage, setDoneImage] = useState(false);

  const [items, setItems] = useState<Items>({
    videos: [],
    images: [],
    texts: []
  });

  const [newItemText, setNewItemText] = useState<Text | null>(null);

  const [text, setText] = useState<Text>({
    rows: 1,
    columns: 12,
    size: 20,
    quantLetters: 10,
    date: new Date()
  });

  const [video, setVideo] = useState<Video>({
    height: 200,
    link: "#",
    width: 500,
    date: new Date()
  });

  const [image, setImage] = useState<Image>({
    height: 200,
    link: "#",
    width: 500,
    date: new Date(),
    label: "teste"
  });

  const [newItemVideo, setNewItemVideo] = useState<Video | null>(null);

  const [newItemImage, setNewItemImage] = useState<Image | null>(null);

  function handleChangeValue(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    item: Text
  ) {
    const biggestValues = values.filter(
      (textValue, index) => items.texts.indexOf(item) < index
    );
    const smallestValues = values.filter(
      (textValue, index) => items.texts.indexOf(item) > index
    );

    setValues([...smallestValues, e.target.value, ...biggestValues]);
  }

  function handleChangeValueVideo(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    item: Video
  ) {
    const biggestValues = videoValues.filter(
      (videoValue, index) => items.videos.indexOf(item) < index
    );
    const smallestValues = values.filter(
      (textValue, index) => items.videos.indexOf(item) > index
    );

    setVideoValues([...smallestValues, e.target.value, ...biggestValues]);
  }

  function handleSortArray(
    item1: Text | Video | Image,
    item2: Text | Video | Image
  ) {
    if (item1.date < item2.date) {
      return -1;
    }
    if (item1.date > item2.date) {
      return 1;
    }
    return 0;
  }

  function handleContent() {
    const serializedItems: (Text | Video | Image)[] = [
      ...items.images,
      ...items.texts,
      ...items.videos
    ];

    const serializedItemsOrdered = serializedItems.sort((item1, item2) =>
      handleSortArray(item1, item2)
    );

    return serializedItemsOrdered.map((itemOrdered: any) => {
      if (itemOrdered.rows) {
        const { columns, quantLetters, rows, size } = itemOrdered;

        return (
          <div
            style={{
              cursor: "move",
              display: "flex"
            }}
            draggable="true"
            onDragStart={() => {
              console.log("drag Start");
              setNewItemText(itemOrdered);
            }}
            onDrag={() => {
              console.log("in drag");
            }}
            onDragEnd={() => {
              console.log("drag end");
            }}
          >
            <Field size={size}>
              <textarea
                rows={rows}
                cols={columns}
                value={values[items.texts.indexOf(itemOrdered)]}
                onChange={e => handleChangeValue(e, itemOrdered)}
                maxLength={quantLetters}
              />
            </Field>
          </div>
        );
      }

      if (itemOrdered.label) {
        const { height, width, link } = itemOrdered;

        return (
          <div
            style={{
              cursor: "move"
            }}
            draggable="true"
            onDragStart={() => {
              console.log("drag Start");
              setNewItemImage(itemOrdered);
            }}
            onDrag={() => {
              console.log("in drag");
            }}
            onDragEnd={() => {
              console.log("drag end");
            }}
          >
            <Image link={link} height={height} width={width} />
          </div>
        );
      }

      const { height, width, link } = itemOrdered;

      return (
        <div
          style={{
            cursor: "move"
          }}
          draggable="true"
          onDragStart={() => {
            console.log("drag Start");
            setNewItemVideo(itemOrdered);
          }}
          onDrag={() => {
            console.log("in drag");
          }}
          onDragEnd={() => {
            console.log("drag end");
          }}
        >
          <iframe
            width={width}
            height={height}
            src={link}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    });
  }

  function handleChageTextField(
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) {
    if (field === "rows") {
      setText({
        ...text,
        rows: Number(e.target.value)
      });
    }
    if (field === "columns") {
      setText({
        ...text,
        columns: Number(e.target.value)
      });
    }
    if (field === "size") {
      setText({
        ...text,
        size: Number(e.target.value)
      });
    }

    if (field === "quantLetters") {
      setText({
        ...text,
        quantLetters: Number(e.target.value)
      });
    }
  }

  function handleChageVideoField(
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) {
    if (field === "link") {
      setVideo({
        ...video,
        link: e.target.value
      });
    }
    if (field === "height") {
      setVideo({
        ...video,
        height: Number(e.target.value)
      });
    }
    if (field === "width") {
      setVideo({
        ...video,
        width: Number(e.target.value)
      });
    }
  }

  function handleChageImageField(
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) {
    if (field === "link") {
      setImage({
        ...image,
        link: e.target.value
      });
    }
    if (field === "height") {
      setImage({
        ...image,
        height: Number(e.target.value)
      });
    }
    if (field === "width") {
      setImage({
        ...image,
        width: Number(e.target.value)
      });
    }
  }

  return (
    <>
      <Container background="#f22a">
        <Menu>
          <div
            style={{
              position: "relative"
            }}
          >
            <XIcon
              onClick={() => {
                setImageOptions(false);
                setDoneImage(false);
              }}
            />

            <ImageOption onClick={() => setImageOptions(true)}>
              {!imageOptions ? (
                <>
                  <h2>Upload de imagem</h2>
                  <div>
                    <UploadIcon />
                  </div>
                </>
              ) : !doneImage ? (
                <>
                  <label htmlFor="height">Height</label>
                  <input
                    onChange={e => handleChageImageField(e, "height")}
                    type="number"
                    name="height"
                  />

                  <label htmlFor="width">Width</label>
                  <input
                    onChange={e => handleChageImageField(e, "width")}
                    type="number"
                    name="width"
                  />

                  <label htmlFor="link">Link</label>
                  <input
                    onChange={e => handleChageImageField(e, "link")}
                    type="text"
                    name="link"
                  />

                  <button onClick={() => setDoneImage(true)}>Done</button>
                </>
              ) : (
                <div
                  style={{
                    cursor: "move",
                    background: "#ccff44"
                  }}
                  draggable="true"
                  onDragStart={() => {
                    console.log("drag Start");
                    setNewItemImage(image);
                  }}
                  onDrag={() => {
                    console.log("in drag");
                  }}
                  onDragEnd={() => {
                    console.log("drag end");
                  }}
                ></div>
              )}
            </ImageOption>
          </div>

          <div
            style={{
              position: "relative"
            }}
          >
            <XIcon
              onClick={() => {
                setVideoOptions(false);
                setDoneVideo(false);
              }}
            />

            <VideoOption onClick={() => setVideoOptions(true)}>
              {!videoOptions ? (
                <>
                  <h2>Upload de vídeo</h2>
                  <div>
                    <UploadIcon />
                  </div>
                </>
              ) : !doneVideo ? (
                <>
                  <label htmlFor="height">Height</label>
                  <input
                    onChange={e => handleChageVideoField(e, "height")}
                    type="number"
                    name="height"
                  />

                  <label htmlFor="width">Width</label>
                  <input
                    onChange={e => handleChageVideoField(e, "width")}
                    type="number"
                    name="width"
                  />

                  <label htmlFor="link">Link</label>
                  <input
                    onChange={e => handleChageVideoField(e, "link")}
                    type="text"
                    name="link"
                  />

                  <button onClick={() => setDoneVideo(true)}>Done</button>
                </>
              ) : (
                <div
                  style={{
                    cursor: "move",
                    background: "#0000ff44"
                  }}
                  draggable="true"
                  onDragStart={() => {
                    console.log("drag Start");
                    setNewItemVideo(video);
                  }}
                  onDrag={() => {
                    console.log("in drag");
                  }}
                  onDragEnd={() => {
                    console.log("drag end");
                  }}
                ></div>
              )}
            </VideoOption>
          </div>

          <div
            style={{
              position: "relative"
            }}
          >
            <XIcon
              onClick={() => {
                setTextOptions(false);
                setDoneText(false);
              }}
            />
            <TextOption onClick={() => setTextOptions(true)}>
              {!textOptions ? (
                <>
                  <h2>Texto</h2>
                  <div>
                    <TextIcon />
                  </div>
                </>
              ) : !doneText ? (
                <>
                  <label htmlFor="lines">Quant lines</label>
                  <input
                    onChange={e => handleChageTextField(e, "rows")}
                    type="number"
                    name="lines"
                  />

                  <label htmlFor="columns">Quant Columns</label>
                  <input
                    onChange={e => handleChageTextField(e, "columns")}
                    type="number"
                    name="columns"
                  />

                  <label htmlFor="quant">Quant letters</label>
                  <input
                    onChange={e => handleChageTextField(e, "quantLetters")}
                    type="number"
                    name="quant"
                  />

                  <label htmlFor="size">Size</label>
                  <input
                    onChange={e => handleChageTextField(e, "size")}
                    type="number"
                    name="size"
                  />

                  <button onClick={() => setDoneText(true)}>Done</button>
                </>
              ) : (
                <div
                  style={{
                    cursor: "move",
                    background: "#00000044"
                  }}
                  draggable="true"
                  onDragStart={() => {
                    console.log("drag Start");
                    setNewItemText(text);
                  }}
                  onDrag={() => {
                    console.log("in drag");
                  }}
                  onDragEnd={() => {
                    console.log("drag end");
                  }}
                ></div>
              )}
            </TextOption>
          </div>
        </Menu>

        <DropZone
          onDragLeave={() => {
            setDoneText(false);
            setTextOptions(false);
            setVideoOptions(false);
            setDoneVideo(false);
            setImageOptions(false);
            setDoneImage(false);
            console.log("drag leave dropzone");
          }}
          onDragEnter={() => console.log("deu certo drag enter ")}
          onDrop={() => console.log("deu certo  drop")}
          onDragOver={() => {
            if (newItemText && items.texts.indexOf(newItemText) === -1) {
              const addNewItem = [
                ...items.texts,
                { ...newItemText, date: new Date() }
              ];
              setItems({
                ...items,
                texts: addNewItem
              });
              setNewItemText(null);
            }

            if (newItemImage && items.images.indexOf(newItemImage) === -1) {
              const addNewItem = [
                ...items.images,
                { ...newItemImage, date: new Date() }
              ];
              setItems({
                ...items,
                images: addNewItem
              });
              setNewItemImage(null);
            }

            if (newItemVideo && items.videos.indexOf(newItemVideo) === -1) {
              const addNewItem = [
                ...items.videos,
                { ...newItemVideo, date: new Date() }
              ];
              setItems({
                ...items,
                videos: addNewItem
              });
              setNewItemVideo(null);
            }
          }}
        >
          {handleContent()}
        </DropZone>
      </Container>
      <Container background="#fff"></Container>
    </>
  );
};

export default Home;
