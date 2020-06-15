import {makeStyles} from '@material-ui/core/styles'
import React, {useRef, useEffect, useState} from 'react'
import {SharedContent as ISharedContent} from '@models/SharedContent'

const useStyles = makeStyles({
  img: (props: ISharedContent) => ({
    width: props.size[0],
    height: props.size[1],
    verticalAlign: 'bottom',
  }),
  iframe: (props: ISharedContent) => ({
    width: '100%',
    height: '100%',
  }),
  text: (props: ISharedContent) => ({
    //width: '100%',
    //height: '100%',
    overflow: 'hidden',
  }),
})

export const Content: React.FC<any> = (props) => {
  const content = props.content as ISharedContent
  const classes = useStyles(content)
  if (content.type == 'img'){
    return <img className={classes.img} src={content.url} />
  }else if (content.type == 'iframe'){
    return <iframe className={classes.iframe} src={content.url} />
  }else if (content.type == 'text'){
    return <div className={classes.text} >{content.url}</div>
  }else{
    return <div className={classes.text} >Unknow type:{content.type} for {content.url}</div>
  }
}
