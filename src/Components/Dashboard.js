import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Stage, Layer, Rect } from "react-konva";
import {Text as Text1} from 'react-konva' ;
import html2canvas from "html2canvas";
import axios from 'axios';
import jsPDF from "jspdf";
import AdImage from "../tool/Image";
import TextDisplay from "../tool/Text";
import Guides from "@scena/react-guides";
import reaarrange from '../assests/nav/rearrange.svg'
import titles from '../assests/nav/titles.svg'
import match from '../assests/nav/match.svg'
import maths from '../assests/nav/maths.svg'
import puzzle from '../assests/nav/puzzle.svg'
import graph from '../assests/nav/graph.svg'
import boxes from '../assests/nav/boxes.svg'
import forword from '../assests/nav/forword.svg'
import backword from '../assests/nav/backword.svg'
import drag from '../assests/nav/drag.svg'
import line from '../assests/title/line.svg'
import title from '../assests/title/title.svg'
import box1 from '../assests/boxes/image1.svg'
import box2 from '../assests/boxes/image.svg'
import box3 from '../assests/boxes/image2.svg'
import box4 from '../assests/boxes/image3.svg'
import box5 from '../assests/boxes/image4.svg'
import box6 from '../assests/boxes/image5.svg'
import box7 from '../assests/boxes/image6.svg'
import box8 from '../assests/boxes/image7.svg'
import box9 from '../assests/boxes/image8.svg'
import box10 from '../assests/boxes/image9.svg'
import box11 from '../assests/boxes/image10.svg'
import box12 from '../assests/boxes/image11.svg'
import box13 from '../assests/boxes/image12.svg'
import box14 from '../assests/boxes/image13.svg'
import box15 from '../assests/boxes/image14.svg'
import box16 from '../assests/boxes/image16.svg'
import box17 from '../assests/boxes/image17.svg'
import box18 from '../assests/boxes/image18.svg'
import box19 from '../assests/boxes/image19.svg'
import box20 from '../assests/boxes/image20.svg'
import box21 from '../assests/boxes/image21.svg'
import box22 from '../assests/boxes/image22.svg'
import shape1 from '../assests/shapes/shape.svg'
import shape2 from '../assests/shapes/shape1.svg'
import shape3 from '../assests/shapes/shape2.svg'
import shape4 from '../assests/shapes/shape3.svg'
import shape5 from '../assests/shapes/shape4.svg'
import shape6 from '../assests/shapes/shape5.svg'
import shape7 from '../assests/shapes/shape6.svg'
import shape8 from '../assests/shapes/shape7.svg'
import shape10 from '../assests/shapes/shape9.svg'
import shape11 from '../assests/shapes/shape10.svg'
import shape12 from '../assests/shapes/shape11.svg'
import baby from '../assests/sketch/baby.svg'
import clock from '../assests/design/clock.png'
import clockstand from '../assests/design/clockstand.png'
import gram from '../assests/design/gram.png'
import kilogram from '../assests/design/kilogram.png'
import weight from '../assests/design/weight.png'
import ruler from '../assests/ruler.svg'
import lion from '../assests/sketch/lion.svg'
import sketch1 from '../assests/sketch/sketch.svg'
import sketch2 from '../assests/sketch/sketch1.svg'
import sketch3 from '../assests/sketch/sketch2.svg'
import sketch4 from '../assests/sketch/sketch3.svg'
import sketch5 from '../assests/sketch/sketch4.svg'
import sketch6 from '../assests/sketch/sketch5.svg'
import sketch7 from '../assests/sketch/sketch6.svg'
import sketch8 from '../assests/sketch/sketch7.svg'
import sketch9 from '../assests/sketch/sketch8.svg'
import sketch10 from '../assests/sketch/sketch9.svg'
import sketch11 from '../assests/sketch/sketch10.svg'
import sketch12 from '../assests/sketch/sketch11.svg'
import logo from '../assests/logo.gif'
import line1 from '../assests/shapes/Line.svg'
import dot from '../assests/shapes/dot.svg'
import new1 from '../assests/new/im.png'
import new2 from '../assests/new/im1.png'
import new3 from '../assests/new/im2.png'
import new4 from '../assests/new/im3.png'
import new5 from '../assests/new/im4.png'
import new6 from '../assests/new/im5.png'
import new7 from '../assests/new/im6.png'
import new8 from '../assests/new/im7.png'
import new9 from '../assests/new/im8.png'
import new10 from '../assests/new/im9.png'
import new11 from '../assests/new/im10.png'
import new12 from '../assests/new/im11.png'
import new13 from '../assests/new/logo.png'
import new14 from '../assests/new/logo1.png'
import underline1 from '../assests/underline.svg'
import rightAlign from '../assests/right.svg'
import centerAlign from '../assests/center.svg'
import leftAlign from '../assests/left.svg'
import italic1 from '../assests/italic.svg'
import { Dropdown, Menu } from 'antd'





import { Box, Button, Input, SimpleGrid, Select,Text, useToast, useDisclosure, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, NumberInput, NumberInputField } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons'
import '../App.css'

// http://localhost:1111

const Dashboard = () => {
  const history = useNavigate()
  const [logout, setLogout] = useState(false)
  const [images, setImages] = React.useState([]);
  const [img, setImg] = React.useState([]);
  const [texts, setTexts] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);
  const [font, setFont] = React.useState({ size: 32, family: "Arial" });
  
  const [isedit, setIsedit] = React.useState(null)
  const [file1, setFile1] = React.useState();
  const [visible, setvisible] = React.useState(false)
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };
  const layerRef = React.useRef();
  const activeRef = React.useRef();
  const backgroundRef = React.useRef();
  const itemRef = React.useRef();
  const stageRef = React.useRef();
  const [flag, setflag] = React.useState(null);
  const [bol, setbol] = React.useState(false);
  const [l, setl] = React.useState();
  const [file, setFile] = React.useState()
  const toast = useToast()
  //models
  const [hours, setHours] = React.useState("");
  const [mins, setmins] = React.useState("");
  const [kg, setkg] = React.useState("");
  const [g, setg] = React.useState("");
  const [color, setcolor] = React.useState('black');
  const [data, setData] = React.useState([])
  const [number, setNumber] = React.useState(0);
  const [scale, setscale] = React.useState({ scalex: '', scaley: '' });
  const [visible1, setvisible1] = React.useState(true)
  const [visible2, setvisible2] = React.useState(false)



  useEffect(() => {
    if (!localStorage.getItem('auth')) history('/')
  }, [logout])

  const logoutHandler = e => {
    e.preventDefault();
    localStorage.removeItem('auth')
    localStorage.removeItem('data')
    setLogout(true)
  }

  const edit1 = (data) => {
    console.log(data)
    setbol(!bol)
    setflag(data)
    console.log(images)
  }
  const editsubmit1 = (uri) => {
    console.log(flag)
    const link = document.createElement("a");
    link.href = uri;
    document.body.appendChild(link);
    const newState = images.map(obj => {
      console.log(obj)
      const scalex = activeRef.current.attrs.scaleX
      const scaley = activeRef.current.attrs.scaleY
      // 👇️ if id equals 2, update country property
      if (obj.hash === flag) {
        console.log(link.href)
        return { ...obj, src: link.href, scaleX: scalex, scaleY: scaley };
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setImages(newState);
    console.log(images)
    setflag(null)
    setbol(false)
    document.body.removeChild(link);
  }
  const editSubmit = (uri) => {
    const link = document.createElement("a");
    link.href = uri;
    document.body.appendChild(link);
    const formData = new FormData();
    formData.append('img', dataURLtoFile(link.href));
    axios.put(`http://localhost:1111/img/${isedit}`, formData).then((res) => {
      console.log(res.data)
      setIsedit(true)
    }).catch(err => console.log(err))
    document.body.removeChild(link);
  }
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const downloadURI1 = async (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    // link.click();
    const url = 'http://localhost:1111/img';
    const formData = new FormData();
    formData.append('img', dataURLtoFile(link.href));
    const config = {
      headers: {
        'content-type': 'multipart/form-data', 'Accept': 'application/json, text/plain, */*',
      }
    };
    console.log(file1)
    await axios.post(url, formData, config).then((response) => {
      console.log(response.data.result.img);
      console.log(response.data.result.inserted_id);
      setImg(current => [...current, response.data.result]);
      toast({
        title: 'Download succesfully.',
        description: "....Inserted succesfully.....",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }).catch((error) => console.log(error.response.data));
    document.body.removeChild(link);
  }
  //image upload
  const handleChange = (event) => {
    setFile(event.target.files[0])
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://localhost:1111/img';
    const formData = new FormData();
    formData.append('img', file);
    formData.append('img', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data', 'Accept': 'application/json, text/plain, */*',
      }
    };
    console.log(file)
    axios.post(url, formData).then((response) => {
      console.log(response.data.result.img);
      // setImg(current => [...current, response.data.result]);
    }).catch((error) => console.log(error.response.data));
  }
  useEffect(() => {
    axios.get('http://localhost:1111/img').then((res) => {
      setImg(res.data)
    })
      .catch(err => err)
  }, [file, handleSubmit, editSubmit])

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.keyCode === 46 && activeRef.current && layerRef.current) {
        setSelectedId(null);
        activeRef.current.destroy();
        layerRef.current.draw();
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      e = e || window.event;  // Event object 'ev'
      var key = e.which || e.keyCode;
      var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17)
        ? true : false);
      if (e.keyCode === 67 && ctrl && activeRef.current && layerRef.current) {
        const img = activeRef.current.attrs.imageUrl
        const txt = activeRef.current.attrs.text
        const x = activeRef.current.attrs.x
        const scaleX = activeRef.current.attrs.scaleX
        const y = activeRef.current.attrs.y
        const scaleY = activeRef.current.attrs.scaleY
        const hash = btoa(Math.random()).substr(10, 5);
        const item = {
          ...itemRef.current.src = img,
          ...itemRef.current.x = x + 140,
          ...itemRef.current.y = y,
          ...itemRef.current.scaleX = scaleX,
          ...itemRef.current.scaleY = scaleY,
          ...itemRef.current,
          hash,
        };

        if (activeRef.current.attrs.imageUrl) {
          setImages((images) => [...images, item]);
          console.log("1")
          console.log(activeRef.current.attrs)
        } else {
          console.log("3")
          console.log(activeRef.current.attrs)
          const text = {
            ...itemRef.current.text = txt,
            ...itemRef.current.x = x + 200,
            ...itemRef.current.y = y,
            ...itemRef.current.scaleX = scaleX,
            ...itemRef.current.scaleY = scaleY,
            ...itemRef.current,
            hash,
          };
          setTexts((texts) => [...texts, text]);
        }
      }
    });
  }, []);

  //single image download
  const downloadURI = (uri) => {
    const link = document.createElement("a");
    link.download = 'image.png';
    link.href = uri;
    document.body.appendChild(link);
    setData(current => [...current, link.href]);
    console.log(layerRef.current.children.length)
    const count = layerRef.current.children.length;
    for (var i = 0; i <= count; i++) {
      layerRef.current.children.pop(0, count).destroy();
    }
    console.log(layerRef.current.children)
    console.log(layerRef.current.children)
    link.click();
    document.body.removeChild(link);
  };

  //fonts color text start
  useEffect(() => {
    // changing of reference
    if (activeRef.current) {
      const { fontSize, fontFamily, scaleX, scaleY } = activeRef.current.attrs;
      setFont({
        size: fontSize,
        family: fontFamily
      });
      setscale({
        scalex: scaleX,
        scaley: scaleY
      });
    }
  }, [selectedId]);

  useEffect(() => {
    const { scalex, scaley } = scale;
    if (activeRef.current && itemRef.current.type === "text" || activeRef.current && itemRef.current.type === "image") {
      activeRef.current.attrs.scaleX = scalex;
      activeRef.current.attrs.scaleY = scaley;
    }
  }, [scale]);

  useEffect(() => {
    const { size, family } = font;
    if (activeRef.current && itemRef.current.type === "text") {
      activeRef.current.attrs.fontSize = size;
      activeRef.current.attrs.fontFamily = family;
    }
  }, [font]);//font

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.attrs.fill = color;
    }
  }, [color])
  // console.log(fontFamily);
  //font color text end

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "its will clear";
      return "its wll clear";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);

  }, []);//alert for reload

  const generatepdf = (event) => {
    event.preventDefault()
    console.log(data)
    const doc = new jsPDF();
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    for (let i = 0; i < data.length; i++) {
      doc.addImage(data[i], 'JPEG', 0, 0, width, height);
      doc.addPage();
      doc.deletePage((data.length) + 1)
    }
    doc.save("question_paper.pdf");
    console.log(height, width)
    setData([])
  }
  //pdf
  const toggleIsLoading = () => {
    setvisible(current => !current);
  };

  const underline = () => {
    activeRef.current.attrs.textDecoration = "underline"
  };
  const italic = () => {
    activeRef.current.attrs.fontStyle = "italic"
  };
  const demoDisplay = (e) => {
    const val = e.target.value
    console.log(val)

    var main = document.getElementById("main");
    main.innerHTML = "";
    for (var i = 0; i < val; i++) {
      var box = document.createElement("div");
      box.classList.add("square");
      main.append(box);
    }
  }
  const center = () => {
    activeRef.current.attrs.align ="center" 
  };
  const right = () => {
    activeRef.current.attrs.align ="right" 
  };
  const left = () => {
    activeRef.current.attrs.align ="left" 
  };

  const menu = (
    <Menu onClick={({ key }) => {
      if (key === "Orientation") {
        setvisible2(!visible2)
      }
      if (key === "border")
        setvisible1(!visible1)
    }}
      items={[
        { label: "Orientation", key: "Orientation" },
        { label: visible1 === true ? "remove border" : "add border", key: "border" }]}>
    </Menu>);

  return (
    <div className='dashboard'>
      <div className='logout'>
        <div>
          <img src={logo} className='logo' />
        </div>
        <button className='logout-button' onClick={logoutHandler}> Log Out</button>
      </div>
      <Flex flexDir='row'>
        {/* nav */}
        <Flex flexDir='column' w={{ lg: '23%', xl: '25%', sm: '20%', md: '20%' }} h='100%' >
          <Flex flexDir='row'>
            {/* nav list,icon */}
            <Flex h='100%' bg='#6853C2' >
              <Tabs display='flex' flexDir='row' variant='unstyled' color='#4328B7' >
                <TabList display='flex' flexDir='column' alignItems='center' w={{ lg: '30%', xl: '30%', sm: '30%', md: '30%' }} h='1020px' overflowY='scroll' sx={{
                  scrollbarWidth: 'none',
                  '::-webkit-scrollbar': {
                    display: 'none',
                  }
                }}>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={titles} height={40} width={40} alt="Lines" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Lines</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={match} height={40} width={40} alt="shapes" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Shape</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={boxes} height={40} width={40} alt="Boxes" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Boxes</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={puzzle} height={40} width={40} alt="puzzle" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Match</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={reaarrange} height={40} width={40} alt="reaarrange" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Rearrange</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={graph} height={40} width={40} alt="graph" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Buble</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={puzzle} height={40} width={40} alt="puzzle" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Puzzle</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={boxes} height={40} width={40} alt="Boxes" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Sentences</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={reaarrange} height={40} width={40} alt="reaarrange" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Passage</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={match} height={40} width={40} alt="shapes" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Trace</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={graph} height={40} width={40} alt="graph" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Dialogue</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={graph} height={40} width={40} alt="graph" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Graph</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={maths} height={40} width={40} alt="maths" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Maths</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={titles} height={40} width={40} alt="titles" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Science</Text></Tab>
                  <Tab _selected={{ background: '#4328B7', borderLeft: '7px solid #ffffff', borderRadius: '5px', w: '100%' }} display='flex' flexDir='column' alignItems='center' marginTop='20px'><img src={match} height={40} width={40} alt="shapes" /><Text color='#ffffff' marginTop='13px' fontSize={{ lg: '14px', xl: '14px', sm: '14px', md: '14px' }}>Map</Text></Tab>


                </TabList>
                <TabPanels p='5px' w={{ lg: '70%', xl: '70%', sm: '70%', md: '70%' }} h='1020px' bg='#ffffff' overflowY='scroll' sx={{
                  scrollbarWidth: 'none',
                  '::-webkit-scrollbar': {
                    display: 'none',
                  }
                }}>
                  {/* titles */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Lines</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      <Box>
                        <img
                          alt="samsung"
                          src={title}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={title}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new1}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new2}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new3}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new4}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new5}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new14}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new6}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new7}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new8}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new9}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new10}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new11}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new12}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={new13}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                    </SimpleGrid>
                  </TabPanel>
                  {/* shapes */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Shapes</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      <Box>
                        <img
                          alt="samsung"
                          src={line1}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={dot}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box16}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box2}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>

                      <Box>
                        <img
                          alt="samsung"
                          src={box4}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box5}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>

                      <Box>
                        <img
                          alt="samsung"
                          src={box8}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box9}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box10}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box11}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box12}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box13}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box14}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box15}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box17}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box18}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box19}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>

                      <Box>
                        <img
                          alt="samsung"
                          src={lion}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch7}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch6}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch5}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch4}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch3}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch2}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch11}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch1}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch12}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch10}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch9}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={sketch8}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={baby}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>


                    </SimpleGrid>
                  </TabPanel>
                  {/* boxes */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Boxes</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      <Box>
                        <img
                          alt="samsung"
                          src={box1}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box6}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape1}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape3}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape4}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape5}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape6}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape7}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box21}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape11}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape12}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape8}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={shape10}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box3}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={box7}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "item-4"
                            };
                          }}
                        />
                      </Box>
                    </SimpleGrid>
                  </TabPanel>
                  {/* match */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Match</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* reaarrange */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Rearrange</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* Buble */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Buble</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* puzzle */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Puzzle</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* Sentences */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Sentences</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* passage */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Passage</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* trace */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Trace</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* Dialogue */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Dialogue</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* Graph */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Graph</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                  {/* maths */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Maths</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      <Box>
                        <img
                          alt="samsung"
                          src={clock}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "maths"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={gram}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "maths"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={kilogram}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "maths"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={clockstand}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "maths"
                            };
                          }}
                        />
                      </Box>
                      <Box>
                        <img
                          alt="samsung"
                          src={weight}
                          draggable="true"
                          onDragStart={(e) => {
                            itemRef.current = {
                              type: "image",
                              src: e.target.src,
                              id: "maths"
                            };
                          }}
                        />
                      </Box>
                    </SimpleGrid>
                  </TabPanel>
                  {/* science */}
                  <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Science</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                    {/* Map */}
                    <TabPanel>
                    <Text color='#232323' fontWeight='500' fontSize='20px'>Map</Text>
                    <Text w={{ lg: '100%', xl: '100%' }} color='#232323' marginTop='9px' fontWeight='400' fontSize='14px' opacity='0.5' borderBottom='0.5px solid #8c8c8c' paddingBottom='10px'>Drag & drop items in the artboard</Text>
                    <SimpleGrid
                      p="10px"
                      spacing="10"
                      columns={2}
                      flexDir="row"
                      alignItems="center"
                      marginTop='20px'
                    >
                      {img.map((data) => (
                        <Box>
                          <img
                            key={data._id}
                            id="shape"
                            alt="lion"
                            // onClick={()=>edit(data)}
                            src={`http://localhost:1111/${data.img}`}
                            style={{ backgroundColor: 'transparent' }}
                            draggable="true"
                            onDragStart={(e) => {
                              itemRef.current = {
                                type: "image",
                                src: e.target.src,
                                id: "s21"
                              };

                            }}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </TabPanel>
                </TabPanels>

              </Tabs>

            </Flex>
          </Flex>
        </Flex>
        {/* drag align design */}
        <Flex flexDir='column' w={{ lg: '63%', xl: '50%', sm: '55%', md: '55%' }} h='100%' >
          <Flex w={{ lg: '100%', xl: '100%', sm: '100%', md: '100%' }} h='30%' bg='#FFFFFF' borderLeft='20px solid #D1D1D1'  >
            {/* drag and font */}
            <Box h='100%' w={{ lg: '30%', xl: '30%', sm: '30%', md: '30%' }}>
              <Button p='20px' bg='#FFFFFF' fontWeight='400' fontSize='16px' border="0.5px solid #808080" _hover='off' margin='10px' onDragStart={(e) => {
                itemRef.current = {
                  type: "text",
                  text: "TEXT HERE"
                };
                // dragUrl.current = null;
                // dragText.current = "Test";
              }}
                draggable="true"><img src={drag} height='16px' width='16px' style={{ marginLeft: '-5px' }} />&nbsp;&nbsp; Drag to add Text</Button>
              <Select p='10px' variant='flushed' placeholder='Times new Roman' w={{ lg: '100%', xl: '100%', sm: '100%', md: '100%' }} marginTop='-7px' onChange={(e) => setFont({ ...font, family: e.target.value })}>
                <option value="Arial" style={{ fontFamily: "Arial" }}>
                  Arial
                </option>
                <option value="Arial" style={{ fontFamily: "Times New Roman" }}>
                  Times new Roman
                </option>
                <option value="Arial Black" style={{ fontFamily: "Arial" }}>
                  Bold
                </option>
                <option value="Algerian" style={{ fontFamily: "Algerian" }}>
                  Algerian
                </option>
                <option
                  value="Berlin Sans FB"
                  style={{ fontFamily: "Berlin Sans FB" }}
                >
                  Berlin Sans FB
                </option>
                <option
                  value="Comic Sans MS"
                  style={{ fontFamily: "Comic Sans MS" }}
                >
                  Comic Sans MS
                </option>
                <option value="Muli" style={{ fontFamily: "Muli" }}>
                  Google Font Muli
                </option>
                <option value="Quicksand" style={{ fontFamily: "Quicksand" }}>
                  Google Font Quicksand
                </option>
                <option value="nunito" style={{ fontFamily: "nunito" }}>
                  Google Font Nunito Regular
                </option>
              </Select>
            </Box>
            {/* size & input*/}
            <Box h='100%' w={{ lg: '20%', xl: '20%', sm: '30%', md: '30%' }}>
              <input type='number' placeholder='eg: 33' onChangeCapture={e => setNumber(e.target.value)} style={{ width: '80px', height: '40px', fontSize: '16px', border: '0.5px solid #808080', margin: '10px', borderRadius: '5px', padding: '10px' }} />

              <Box h='100%' p='10px' w={{ lg: '100%', xl: '100%', sm: '20%', md: '20%' }}>
                <Select variant='flushed' placeholder='24' marginTop='-7px' w={{ lg: '100%', xl: '100%', sm: '100%', md: '100%' }} onChange={(e) => setFont({ ...font, size: e.target.value })}>
                  <option value='6'>6</option>
                  <option value='8'>8</option>
                  <option value='10'>10</option>
                  <option value='12'>12</option>
                  <option value='14'>14</option>
                  <option value='16'>16</option>
                  <option value='18'>18</option>
                  <option value='20'>20</option>
                  <option value='24'>24</option>
                  <option value='28'>28</option>
                  <option value='32'>32</option>
                  <option value='36'>36</option>
                  <option value='40'>40</option>
                  <option value='48'>48</option>
                  <option value='56'>56</option>
                  <option value='64'>64</option>
                  <option value='72'>72</option>
                </Select>
              </Box>

            </Box>
            {/* color & button number*/}
            <Box h='100%' w={{ lg: '50%', xl: '50%', sm: '50%', md: '50%' }}>
              <Button p='20px' bg='#FFFFFF' fontWeight='400' fontSize='16px' border="0.5px solid #808080" _hover='off' margin='10px'
                onDragStart={(e) => {
                  itemRef.current = {
                    type: "number",
                    text: number,
                    width: "50"
                  };
                  // dragUrl.current = null;
                  // dragText.current = "Test";
                }}
                draggable="true"

              >
                <img src={drag} height='16px' width='16px' style={{ marginLeft: '-5px' }} />&nbsp;&nbsp; Drag Number
              </Button>
              <Box display="column">
                <Box h='100%' p='10px'>
                  <Text fontWeight='bold' marginLeft='10px' marginTop='-12px' fontSize={{ md: '29px', lg: '20px' }}>T</Text>
                  <input type='color' style={{ height: '6px', paddingtop: '-40px', width: '40px' }} onChange={(e) => setcolor(e.target.value)} />&nbsp;&nbsp;
                  <Button marginTop="-25px" border="0.5px solid #808080" _hover='off' background="white" onClick={underline} ><img src={underline1} height='26px' width='26px' style={{ marginLeft: '-5px' }} /></Button>&nbsp;&nbsp;
                  <Button marginTop="-25px" border="0.5px solid #808080" _hover='off' background="white" onClick={italic} ><img src={italic1} height='20px' width='20px' style={{ marginLeft: '-5px' }} /></Button>
                </Box>

              </Box>
            </Box>

            {/* vertical line */}
            <Box borderLeft='1px solid #D1D1D1' h="90px" marginTop='14px' marginLeft='10px'></Box>
            {/* forward button */}
            <Box p='15px' w={{ lg: '19%', xl: '20%', sm: '20%', md: '20%' }}>
              <h5 style={{ opacity: '0.5', fontWeight: '450' }}>Align</h5>
              <Button p={'12px'} _hover='off' _selected='off' marginTop={'10px'} bg='#FFFFFF' onClick={() => {
                if (activeRef.current) {
                  activeRef.current.moveToTop();
                  layerRef.current.draw();
                }
              }} ><img src={forword} /></Button>
              <h1>Forward</h1>
            </Box>
            {/* backward button */}
            <Box p='15px' w={{ lg: '30%', xl: '20%', sm: '20%', md: '20%' }}>
              <Button p={'20px'} _hover='off' _selected='off' marginTop={'28px'} bg='#FFFFFF' onClick={() => {
                if (activeRef.current) {
                  activeRef.current.moveToBottom();
                  backgroundRef.current.moveToBottom();
                  layerRef.current.draw();
                }
              }} ><img src={backword} /></Button>
              <h1> Backward</h1>
            </Box>
            <Box p='15px' w={{ lg: '20%', xl: '20%', sm: '20%', md: '20%' }}>
              <Button p={'5px'} _hover='off' _selected='off' marginTop={'28px'} bg='#FFFFFF'
                onClick={toggleIsLoading} ><img src={ruler} /></Button>
              <h1> Ruler</h1>
            </Box>
          </Flex>
          {/* Tool bar & editor */}
          {visible === true ?
            <Guides
              style={{ width: "100%", height: "30px" }}
            />
            : null}
          <Flex w={{ lg: '100%', xl: '100%', sm: '100%', md: '100%' }} h='70%' border='20px solid #D1D1D1' borderBottom='37px solid #D1D1D1'
            onDrop={(e) => {
              e.preventDefault();
              const hash = btoa(Math.random()).substr(10, 5);
              // register event position
              stageRef.current.setPointersPositions(e);
              const item = {
                ...stageRef.current.getPointerPosition(),
                ...itemRef.current,
                hash
              };
              if (itemRef.current.type === "image") {
                setImages((images) => [...images, item]);
              } else {
                setTexts((texts) => [...texts, item]);
              }
            }}
            onDragOver={(e) => e.preventDefault()
            }
          >
            <Dropdown overlay={menu} trigger={["contextMenu"]}>
              <div>
                <Stage
                  id="remove"
                  height={visible2 === true ? 595 : 842}
                  width={visible2 === true ? 842 : 595}
                  style={{
                    backgroundColor: "#FFF",
                    boxShadow: "0px 0px 17px 0px rgb(204 204 204 / 64%)",
                    margin: 'auto',

                  }}
                  ref={stageRef}
                  onMouseDown={checkDeselect}
                  onTouchStart={checkDeselect}
                >
                  <Layer ref={layerRef}>
                    {images.map((image, index) => {
                      return (
                        <AdImage
                          key={`image-${index}`}
                          image={image}
                          stageRef={stageRef}
                          layerRef={layerRef}
                          setSelectedId={setSelectedId}
                          selectedId={selectedId}
                          isSelected={image.hash === selectedId}
                          onSelect={(event) => {
                            const shape = event.target;
                            activeRef.current = shape;
                            setSelectedId(image.hash);
                            console.log(event)
                            if (event.type === 'click' && event.target.attrs.imageId === "maths") {
                              edit1(image.hash)
                              console.log(event.target.attrs.scaleX)
                              console.log(event.target.attrs.scaleY)
                              console.log(layerRef)
                            }
                          }}
                        />
                      );
                    })}
                    {texts.map((text, index) => {
                      return (
                        <TextDisplay
                          key={`text-${index}`}
                          text={text}
                          stageRef={stageRef}
                          fontSize={font.size}
                          fontFamily={font.family}
                          activeRef={activeRef}
                          layerRef={layerRef}
                          setSelectedId={setSelectedId}
                          selectedId={selectedId}
                          setFont={(e) => setFont(e)}
                          isSelected={text.hash === selectedId}
                          onSelect={(event) => {
                            const shape = event.target;
                            activeRef.current = shape;

                            setSelectedId(text.hash);
                          }}
                        />
                      );
                    })}
                    {visible1 === true ?
                      <Rect
                        x={25}
                        y={25}
                        width={visible2 === true ? 792 : 545}
                        height={visible2 === true ? 545 : 792}
                        strokeWidth={2} // border width
                        stroke="black" // border color
                      /> : null}
                      <Text1
                        x={290}
                        y={820}
                        text={"1"}
                        fontSize={20} />
                  </Layer>
                </Stage>
              </div>
            </Dropdown>
          </Flex>
          {visible === true ?
            <Guides
              type={"vertical"}
              style={{ width: "19px", height: "78%", position: "absolute", marginTop: '145px' }}
            /> : null}
        </Flex>

        {/* edit image */}
        <Flex flexDir='column' w={{ lg: '14%', xl: '25%', sm: '25%', md: '25%' }} h='100%'>

          <Flex w={{ lg: '100%', xl: '100%', sm: '100%', md: '100%' }} h='30%' bg='#FFFFFF' >
            <Box display='flex' flexDir='row'>
              <Box p='10px'  >
                <Button type="submit" w={{ lg: '90%', xl: '90%', sm: '90%', md: '90%' }} border='1px solid #6853C2' color='#6853C2' _hover='off' fontWeight='light' onClick={() => {
                  setSelectedId(null);
                  // activeRef.current.setStroke(""transparent"");
                  layerRef.current.draw();
                  setTimeout(() => {
                    const dataURL = stageRef.current.toDataURL({
                      quality: 1,
                      pixelRatio: 1,
                      mimeType: "application/pdf"
                    });
                    downloadURI(dataURL);
                  }, 1000);
                  toast({
                    title: 'Download succesfully.',
                    description: "....please check.....",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })
                }}>Save & create new</Button>
              </Box>
              <Box p='10px'  >
                <Button leftIcon={<DownloadIcon />} type="submit" w={{ lg: '100%', xl: '100%', sm: '100%', md: '100%' }} backgroundColor='#6853C2' marginLeft={{ xl: '-23px', lg: '-10px' }} color='#FFFFFF' _hover='off' fontWeight='light' onClick={generatepdf}>Download</Button>
              </Box>
            </Box>
            
            <Box>
            <Button p={'5px'} _hover='off' _selected='off' marginTop={'28px'} bg='#FFFFFF'
                onClick={right} ><img src={rightAlign} /></Button>
                  <Button p={'5px'} _hover='off' _selected='off' marginTop={'28px'} bg='#FFFFFF'
                onClick={left} ><img src={leftAlign} /></Button>
                  <Button p={'5px'} _hover='off' _selected='off' marginTop={'28px'} bg='#FFFFFF'
                onClick={center} ><img src={centerAlign} /></Button>
          
              </Box>
          </Flex>

          <Box w={{ lg: '100%', xl: '100%', sm: '100%', md: '100%' }} h='20%' bg='#FFFFFF' p='20px'>
            <Box w='100%' h='20%'>
              <label style={{ marginTop: '40px', fontWeight: 'bold' }}>Upload new image</label>
              <form onSubmit={handleSubmit}>
                <Input style={{ marginTop: '10px' }} type='file' border='off' onChange={handleChange} />
                <Button p='15px' backgroundColor='#6853C2' color='#FFFFFF' _hover='off' marginLeft="10px" type='submit'>Upload</Button></form>
              <br />
              <hr />
            </Box>
          </Box>
          <Flex h='50%' overflowY='scroll'
            sx={{
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}>
            {bol == !null ?
              <SimpleGrid
                columns={1}
                flexDir="row"
                h='750px'
              >
                <Text color='#232323' fontWeight='500' fontSize='20px' >Edit content</Text>
                <Box marginLeft='50px' marginTop='60px' >
                  <div className="clock" id='editor'>
                    <div className="hand hour" style={{ transform: `translate(-50%) rotate(${(hours / 12) * 360}deg)` }}></div>
                    <div className="hand minute" style={{ transform: `translate(-50%) rotate(${(mins / 60) * 360}deg)` }}  ></div>
                    <div className="number number0_1"></div>
                    <div className="number number0_2"></div>
                    <div className="number number0_3"></div>
                    <div className="number number0_4"></div>
                    <div className="number number1"><div>1</div></div>
                    <div className="number number0_6"></div>
                    <div className="number number0_7"></div>
                    <div className="number number0_8"></div>
                    <div className="number number0_9"></div>
                    <div className="number number2"><div>2</div></div>
                    <div className="number number1_1"></div>
                    <div className="number number1_2"></div>
                    <div className="number number1_3"></div>
                    <div className="number number1_4"></div>
                    <div className="number number3"><div>3</div></div>
                    <div className="number number1_6"></div>
                    <div className="number number1_7"></div>
                    <div className="number number1_8"></div>
                    <div className="number number1_9"></div>
                    <div className="number number4"><div>4</div></div>
                    <div className="number number2_1"></div>
                    <div className="number number2_2"></div>
                    <div className="number number2_3"></div>
                    <div className="number number2_4"></div>
                    <div className="number number5"><div>5</div></div>
                    <div className="number number2_6"></div>
                    <div className="number number2_7"></div>
                    <div className="number number2_8"></div>
                    <div className="number number2_9"></div>
                    <div className="number number6"><div>6</div></div>
                    <div className="number number3_1"></div>
                    <div className="number number3_2"></div>
                    <div className="number number3_3"></div>
                    <div className="number number3_4"></div>
                    <div className="number number7"><div>7</div></div>
                    <div className="number number3_6"></div>
                    <div className="number number3_7"></div>
                    <div className="number number3_8"></div>
                    <div className="number number3_9"></div>
                    <div className="number number8"><div>8</div></div>
                    <div className="number number4_1"></div>
                    <div className="number number4_2"></div>
                    <div className="number number4_3"></div>
                    <div className="number number4_4"></div>
                    <div className="number number9"><div>9</div></div>
                    <div className="number number4_6"></div>
                    <div className="number number4_7"></div>
                    <div className="number number4_8"></div>
                    <div className="number number4_9"></div>
                    <div className="number number10"><div>10</div></div>
                    <div className="number number5_1"></div>
                    <div className="number number5_2"></div>
                    <div className="number number5_3"></div>
                    <div className="number number5_4"></div>
                    <div className="number number11"><div>11</div></div>
                    <div className="number number5_6"></div>
                    <div className="number number5_7"></div>
                    <div className="number number5_8"></div>
                    <div className="number number5_9"></div>
                    <div className="number number12"><div>12</div></div>
                    <div className="number number6_1"></div>
                    <div className="number number6_2"></div>
                    <div className="number number6_3"></div>
                    <div className="number number6_4"></div>
                  </div><br />
                  <div> Hours: <Input type='number' value={hours} size='sm' maxW={20} defaultValue={15} min={10} variant='filled'
                    onChange={(e) => setHours(e.target.value)} />&nbsp;
                    Mins: <Input type='number' value={mins} size='sm' maxW={20} defaultValue={15} min={10} variant='filled'
                      onChange={(e) => setmins(e.target.value)} />&nbsp;
                    <br /><br /></div>
                  <Button mt={4}
                    colorScheme='red'
                    onClick={async () => {
                      const element = document.getElementById('editor'),
                        canvas = await html2canvas(element, { backgroundColor: "transparent" })
                      const dataURL = canvas.toDataURL({
                        quality: 1,
                        pixelRatio: 1,
                        mimeType: "image/png"
                      });
                      editsubmit1(dataURL)
                    }} >change</Button>
                </Box>
                <Box marginLeft='50px' marginTop='40px'>
                  <div className="clock1" id="editor1">
                    <div className="hand hour" style={{ transform: `translate(-50%) rotate(${(g / 1000) * 360}deg)` }}></div>
                    <div className="num num1_1"><div>100</div></div>
                    <div className="num num1_2"><div>200</div></div>
                    <div className="num num1_3"><div>300</div></div>
                    <div className="num num1_4"><div>400</div></div>
                    <div className="num num1_5"><div>500</div></div>
                    <div className="num num1_6"><div>600</div></div>
                    <div className="num num1_7"><div>700</div></div>
                    <div className="num num1_8"><div>800</div></div>
                    <div className="num num1_9"><div>900</div></div>
                    <div className="num num2"><div>0</div>g</div>
                  </div><br />
                  grams: <Input type='number' size='sm' maxW={20} defaultValue={15} min={10} variant='filled' value={g}
                    onChange={(e) => setg(e.target.value)} /><br /><br />
                  <Button mt={4}
                    colorScheme='green'
                    onClick={async () => {
                      const element = document.getElementById('editor1'),
                        canvas = await html2canvas(element, { backgroundColor: "transparent" })
                      const dataURL = canvas.toDataURL({
                        quality: 1,
                        pixelRatio: 1,
                        mimeType: "image/png"
                      });
                      editsubmit1(dataURL);
                    }} >Change</Button>

                </Box>
                <Box marginLeft='50px' marginTop='40px'>
                  <div className="clock1" id="editor2">
                    <div className="hand hour" style={{ transform: `translate(-50%) rotate(${(kg / 10) * 360}deg)` }}></div>
                    <div className="num num1_1"><div>1</div></div>
                    <div className="num num1_2"><div>2</div></div>
                    <div className="num num1_3"><div>3</div></div>
                    <div className="num num1_4"><div>4</div></div>
                    <div className="num num1_5"><div>5</div></div>
                    <div className="num num1_6"><div>6</div></div>
                    <div className="num num1_7"><div>7</div></div>
                    <div className="num num1_8"><div>8</div></div>
                    <div className="num num1_9"><div>9</div></div>
                    <div className="num num2"><div>0</div>kg</div>

                  </div><br />
                  kilogram: <Input type='number' size='sm' maxW={20} defaultValue={15} min={10} variant='filled' value={kg}
                    onChange={(e) => setkg(e.target.value)} /><br />
                  <Button mt={4}
                    colorScheme='teal'
                    onClick={async () => {
                      const element = document.getElementById('editor2'),
                        canvas = await html2canvas(element, { backgroundColor: "transparent" })
                      const dataURL = canvas.toDataURL({
                        quality: 1,
                        pixelRatio: 1,
                        mimeType: "image/png"
                      });
                      editsubmit1(dataURL)
                    }}>Change</Button>
                </Box>
                <Box marginLeft='50px' marginTop='30px'>
                  <div id="container1">
                    <div id="beaker">
                      <div id="oval"></div>
                      <div id="liquid" style={{ height: `${l / 3.7}px` }}></div>
                      <div id="line11" className="line"><div className="amount">100</div></div>
                      <div id="line12" className="line1"></div>
                      <div id="line13" className="line"><div className="amount">200</div></div>
                      <div id="line14" className="line1"></div>
                      <div id="line15" className="line"><div className="amount">300</div></div>
                      <div id="line16" className="line1"></div>
                      <div id="line17" className="line"><div className="amount">400</div></div>
                      <div id="line18" className="line1"></div>
                      <div id="line19" className="line"><div className="amount">500</div></div>
                      <div id="line20" className="line1"></div>
                      <div id="line21" className="line"><div className="amount">600</div></div>
                      <div id="line22" className="line1"></div>
                      <div id="line23" className="line"><div className="amount">700</div></div>
                      <div id="line24" className="line1"></div>
                      <div id="line25" className="line"><div className="amount">800</div></div>
                      <div id="line26" className="line1"></div>
                      <div id="line27" className="line"><div className="amount">900</div></div>
                    </div>
                  </div><br />
                  litres <Input type='number' size='sm' maxW={20} min={10} variant='filled' value={l}
                    onChange={(e) => setl(e.target.value)} /><br />
                  <form onSubmit={handleSubmit}>
                    <Button mt={4}
                      colorScheme='teal'
                      onClick={async () => {
                        const element = document.getElementById('container1'),
                          canvas = await html2canvas(element, { backgroundColor: "transparent" })
                        const dataURL = canvas.toDataURL({
                          quality: 1,
                          pixelRatio: 1,
                          mimeType: "image/png"
                        });
                        editsubmit1(dataURL)
                      }}>change</Button>&nbsp;
                  </form>
                </Box>
                <Box>
                  <label>Column</label>
                  <Input type="text" id="txt1" onChange={demoDisplay} />
                  <div id="main"></div>
                  <Button mt={4}
                    colorScheme='blackAlpha'
                    onClick={async () => {
                      const element = document.getElementById('main'),
                        canvas = await html2canvas(element, { backgroundColor: "transparent" })
                      const dataURL = canvas.toDataURL({
                        quality: 1,
                        pixelRatio: 1,
                        mimeType: "image/png"
                      });
                      editsubmit1(dataURL)
                    }}>Change</Button>
                </Box>
              </SimpleGrid>
              : <Box>
                <Box p='20px'>
                  <Text fontSize='20px' color='#232323'>Measurement:</Text>
                  scaleX:<Input type='number' size='sm' maxW={20} variant='filled' value={scale.scalex}
                    onChange={(e) => setscale({ ...scale, scalex: e.target.value })} />&nbsp;
                  scaleY:<Input type='number' size='sm' maxW={20} variant='filled' value={scale.scaley}
                    onChange={(e) => setscale({ ...scale, scaley: e.target.value })} />
                </Box>
                <hr style={{ marginLeft: "20px" }} />
                <SimpleGrid
                  p="10px"
                  spacing="10"
                  columns={2}
                  flexDir="row"

                >
                  {img.map((data) => (
                    <Box>
                      <img
                        key={data._id}
                        id="shape"
                        alt="lion"
                        // onClick={()=>edit(data)}
                        src={`http://localhost:1111/${data.img}`}
                        style={{ backgroundColor: 'transparent' }}
                        draggable="true"
                        onDragStart={(e) => {
                          itemRef.current = {
                            type: "image",
                            src: e.target.src,
                            id: "s21"
                          };

                        }}
                      />
                    </Box>
                  ))}
                </SimpleGrid></Box>
            }
          </Flex>
        </Flex>

      </Flex>

    </div>
  )
}

export default Dashboard
