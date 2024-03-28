import{jsx as _jsx}from"react/jsx-runtime";import{useEffect,useState,Children}from"react";import NotFoundPage from"../pages/NotFound";import{NAVIGATION_EVENT}from"../utils/constants";import PropTypes from"prop-types";import{match}from"path-to-regexp";import{getCurrentLocation}from"../utils/getCurrentLocation";export default function Router({children}){const[currentPath,setCurrentPath]=useState(getCurrentLocation());useEffect(()=>{function changeLocation(){const pathName=getCurrentLocation();setCurrentPath(prevState=>{if(prevState!==pathName)return pathName})}window.addEventListener(NAVIGATION_EVENT,changeLocation);window.addEventListener("popstate",changeLocation);return()=>{window.removeEventListener(NAVIGATION_EVENT,changeLocation);window.removeEventListener("popstate",changeLocation)}},[]);const routesFromChildren=Children.map(children,({props,type})=>{return type.name==="Route"?props:null});let routeParams={};const Page=routesFromChildren?.find(({path})=>{if(path===currentPath)return true;const matchedUrl=match(path,{decode:decodeURIComponent});const matched=matchedUrl(currentPath);if(matched){routeParams=matched.params;return true}return false})?.Component;return Page?_jsx(Page,{routeParams:routeParams}):_jsx(NotFoundPage,{routeParams:routeParams})}Router.propTypes={children:PropTypes.node};
