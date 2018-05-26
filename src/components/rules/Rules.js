import React from 'react'
import ReactMarkdown from 'react-markdown'
import { localize } from 'react-localize-redux';

const Rules = ({ translate }) => (
    <div className="rules">
        <h2>
            {translate('rules')}
        </h2>
        <ReactMarkdown source={translate('rule1')} />
        <ReactMarkdown source={translate('rule2')} />
        <ReactMarkdown source={translate('rule3')} />
        <ReactMarkdown source={translate('rule4')} />
        <ReactMarkdown source={translate('rule5')} />
        <ReactMarkdown source={translate('rule6')} />
        <ReactMarkdown source={translate('rule7')} />
        <ReactMarkdown source={translate('rule8')} />
        <ReactMarkdown source={translate('rule9')} />
    </div>
);

export default localize(Rules, 'locale');