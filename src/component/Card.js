import React from 'react'
import {BsFileEarmarkSpreadsheet} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'

function Card(props) {
  return (
    <div>
        <div class="max-w-xs overflow-hidden border-2 border-black relative bg-white">
        <img class="w-full" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="Sunset in the mountains" />
        <p class="absolute top-2 right-2 text-white bg-black/[0.5] px-2">{props.props.stat}</p>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{props.props.name}</div>
            <p class="text-gray-700 text-sm">
            Last Updated : {props.props.updated}
            </p>
            <p class="text-gray-700 text-sm pt-3 tracking-wide">
            <span><BsFileEarmarkSpreadsheet class="inline pb-0.5 mr-1"/>Lesson : {props.props.lesson}</span>
            <span class="px-3"><AiOutlineClockCircle class="inline pb-0.3 mr-1"/>Minutes : {props.props.time}</span>
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            {
              props.props.tags.map((ele)=>(
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ele}</span>
              ))
            }
        </div>
        </div>
    </div>
  )
}

export default Card