import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    let userName='supriya';
    let marks = 45;
    let profile = 'data:image/webp;base64,UklGRoAFAABXRUJQVlA4IHQFAABQIQCdASqUAJQAPoFAmkklJCKhJ3TqYKAQCWVu3V7UwFydz2OZuA3D/9g+zHILzxRCWzZNlWFzSPI39YewL0gP2w9lX9lS7De8Ni3zqHe+8YyaL5saF0Mq9QqUbt4iSAWw/wYWqjQjSORTeSor9ilkp6CqGfkMmclIzJgIkf9E2MSa97aFoDh8TzpuHiy8isEZvuWVv4ulOOoCI/vKNC+4bDAc0/zXbPdXEm+uhUKPX78N3DZqQ5hQAp6ks7c2EsguQ2dMU2Xh9gN/YfuoPJxPPTpqiNeYepFjJRiT1ELY1y22dskOmbDfzqVuF6U2RBsO96CxCrR42jFXC9lX7xiB4nUTfJ42iSJZ+P60w1hv7lYoAAD++5QAAGEIDgI8Fpzq/fE9ZQzp37ozB929kEBwP49NGHVGBw1UuW6CeIcK8vyS3Sq+Iv+uMS/U8FY/VJxc7WdXQqLyLzzUtMpR3Wh3YuEDjdsdp8E2e1ZJFPEAnh+roGbBwu/0Mc8F6IJ74aulyLpHq6vLSFuG0Lqeylw2GBsCZd7nhs/k+e7w/W3LHfqsFjfxPwumeWC4pzwHTOdlB2BMJro6eR5sMZUFj1HipGw8rpiSrFtur8MQO4R4BeJgRfgZ3KVFwErQSXHY5EHMPmCIquHqx/khqbs9XeKO2jLc32GSUUTySGATQAXjL+0ELwaqx4Bfy5GJRo/F9O9SxFk+LryWXuWzL71RUckDYQ+BPpowukPFqDfXm9nNN2Y9Nu9c+ijqhe+GfjkQUueBYg7RmeQDmfLDznCZFqkKj5aZbx+BeEJfbu1MfDPM4yM1F/pqb9q61MwjSdHbQOXn+Znio565mDzi4hmXBUFASAlKJUplIQWtjie4Ih2PkM0SmHqYXZjvyvM0z7W8iUFawo+TIxcK9x1ueY21rCZxZMBXOCQd2MnbU9Vw2acFbIXquAFdofWbLrc1fcbyg4PlVPywC7hAF+KXdfa6xtnUJ8Uo7sfI6cFBOw+Ny37/bpX2eGfQd8xz76+JJJsViqkCxnNcqjoq0MIPaw9okIchwUKpGeplbZtjfrPMddG8v5GnpeSPd3e+ry1fob5yi19o/YOfSDWdKYWgOE8ZBChejlbRCPULLq8g0ageCoSlcATRF2c/t0AABIrzygcVx+VUTK5682Lg5Du8uNWtFOLFZDioVzwYe6FrU4o7+h1DJvdpc5xeypvTmQAJH1zb0/1UOKQEloY3/8ZwCp+Udh7xT7qJWleu6nDWw18j56mM7M0TVsWkNC7TvJS3JKHtrnxkOP00tjhDwrjEEn4QBZYRfJq/80kD8cH6aeGynlcdV/WuyUS7X1fBA7INLYu6/etuXSVWSBM0PiKpQDIzxRi9KZEWHx0aiuqVpKB3YwJZE4K7g+VsR7lSxeiAR3pHTL375HwMq8P4KLwy/KJOVKyqS/+pZI0f3CRF/yAUayEv7nXN8xxXcjPVcdD4pI9Rca02M5rJy5b4iF/mLo2HvHFd42qZoOJSR/1JkeERFrkfftxt4UX5uOVCGLZ/tclYYzRHobQoTf9XOnawGBE4pVLF/nZ/Sin50bEEhTs/inwwDKwv8ue+UsJZaa96mI/v91pZRb7vK7cq48J2uyXvZa2NxN/giSNqs8sJfxtcn8oPWxamBJm4pTLOZ27kkIftfXPuYJHLw9oUVgrf1asF45z4soofvewQbcUF0zTnQ/KVd645jmzS4j2NYrVvlS6tPCTubu6/naUCHdlDt55IpNYuLS7OfzkEiU9b8TkAsewcxbZ/GpovpF6KKQDQkLKEFuetVvbwK4irH09S7/f7wTuq6sKLbXZau+rgkAVR/2rs8r9padMr9qhbvCMOkHj+AAAAAAAA';
    let skills=['js','ts','ract'];

    pro.uname='aakash';
  return (
    <div>
      <h1>ParentComponent</h1>
      <ChildComponent uname= {userName} umarks= {marks}  uprofile={profile} uskills={skills}/>
       
    </div>
  )
}

export default ParentComponent
