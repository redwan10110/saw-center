import React from 'react';

const Portfolio = () => {
    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th colSpan={2} className="text-center">Portfolio</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <th>Name</th>
                        <td>Md Abdullah</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>abd@gmail.com</td>
                    </tr>
                    <tr>
                        <th>Education</th>
                        <td>HSC</td>
                    </tr>
                    <tr>
                        <th>Technology</th>
                        <td>Html, Css, Javascript, React, Bootstrap, tailwind</td>
                    </tr>
                    <tr>
                        <th>Project 1</th>
                        <td><a href="https://lucky-one-redwan10110.netlify.app/" className='text-purple-900'>https://lucky-one-redwan10110.netlify.app/</a></td>
                    </tr>
                    <tr>
                        <th>Project 2</th>
                        <td><a href="https://tesla-model-x-reviews.netlify.app/" className='text-purple-900'>https://tesla-model-x-reviews.netlify.app/</a></td>
                    </tr>
                    <tr>
                        <th>Project 3</th>
                        <td><a href="https://lawyer-43f05.web.app/" className='text-purple-900'>https://lawyer-43f05.web.app/</a></td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Portfolio;