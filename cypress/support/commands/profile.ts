export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asasf' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'user',
            age: 45,
            currency: 'EUR',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'testuser',
            // eslint-disable-next-line max-len
            avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABKVBMVEX////mOx/W4+v0qYEdGDjjjGHOdU0AFTn7roTsPB4AADPmOBr3q4IAAC8AFjnpPB7yPRwAEzrlKACebmDkHgAYFTflNBPjAADqon0AACrV5/DP3eXr8fX86ef74+DlMAv2xsH98fAMDjX0trGrd2V8VlPzrqi2x87kiFng6vDuhnrpX07rbWLnRzXRNyOvMCmXKyyhLStwJDH52NVNN0TJjHDZl3c0Jj1hREqNYVjkfFTvkojnTj3nQSvNbELi4OLseG3xo5yGKC9ZIDTGNCU4GzdkIjNvTk+6gWpBL0FvQkLmVDO2b1KGVUvmaknQgV2urrZwbnnTnIWXlJtUU2f7uJT4zbjmrpXnt6qYYFK/a09IHjXonYnhy8bym3XFX0KeWkXXi4jdqKi3vD38AAAI1klEQVR4nO1abVvaSBcmkEAICS+BQMAKmIKiINQWAioUtS+CVt3urtXtLjyt//9HPGcmAbHMS0DsJ+6rFw2R5L5zzpkz58zE51tjjTXWWGONZ2BrMw/Y3Pr9zPni9l5ViKQLGOmIUN3bLuZ/E/lmEbh1HdFOAVJ0HVQUN1+afWu7VkgVIjPcMyoihVS6tv2SDinWUnqaxP2ItJ46Kb4M+9Z2j8c+0bD/evVm2Drd14mGJzpD31+1J4rdlGd6LCHVLa6QPl9djN6RUFvZkDjNePL9r0hnTldCn6/py9Aj6LUVJKeiUCDdOxZ2EWMpKPTePZf/NEPwfiwerzfenAHeNOrwBWTEyEIime3n8Z+kCHeN18+iiVA0FApF4SMhfjg7aHxEQkgqUnvP4Se5PyachaLiLIxoKGqInz6cgTnmJei15fm7RPd/DolEGNGE+LkenldQXZa/SuKPv6XwY0QTDYKCJW1QJQ2/WIPFD1idghPi8A8bBluAKNYJcbBEJJ6S+Q84BgAvvI3PX6cvnBTfZUj8QuwTjx+CkWACIbNgRsqTxj8YoJHgCwgdkJKSvtjUVCVPP+HPtAiYOR8i+UAoLBSI5AAQYvVHHkuxjMdjONQmX40PJAGCvkBSzhMTEMoBbgo0FOU8WRY1BUFTzge2bQ+GClOAkPbuhC7ZAbGPLr8llmQEszUoDVqmLKsAWS4r9GGABHjOiK/JESiE3SSodEw5gIBYgTzgQm5aWMDZfCrCSBW98W/tU+qvuGMAq/nI+QSqjcMg+oYiINL1JmCbYoBYHY9BwzDJ/GCCDjJBqEErUlKvn2WAsDMNaAOZwh9QWwpTQKTrpVinDMFJGjaaNHqA2TYYLvBoApoBXAHaIdUArg/IiQgj7SEKitQa2HEBwwMg4FBDXqIKEPQiVwAlCQsoDaAg1GxaCCIBAyQg8ZFaKvMT8hZ5FsToYQFoDODx/zT+8BnV1nAUUoNAyPAEbDO6kDh2gQn5xy4lS5AB1Sm72UomSzbkBxSFLAE6LwxrjC4s/hkykRGQzY6GIJZdb6h2uY3PQIYsW0wXCOkTjgcoSQgj1kgYxjBgW51yudxpa9mh6/lhVmujc03RRj5QGPcQdHYqKLIECPWLpnaumrKDQCvg+sBsBdxzpjy02mW6B7gTwh5lInZwKX3RksjzqmmiUHgMQTUAZ9D4VAfKlXTEuEfhmCmgyloHiFxLN1lIA2rgsCmKndaMALsjis0r0AHZ+ItUYdwkzRyIedbzC5Ej6UaBRKiKf3y1tK87f05Hgf3HX1nr7x0FzFLSbiSJdZMeqy55xwwBECCJHXjKW9/XbPar79vUAN98f2W1v323agCGAVuAkGLVx6ws4AhoG4gwcHdYvr+dSUW338qHf96iESG2eQJYmYAdg0hAU8OuVwmZEJ83NZ4AnRWF9IkAC7gGAUqZMRkF5JIylNgCmFFInYqnAi6sockQoHaspsQchszCbKvHXo27RAKUFn06VE3F4ArYX15AT5KuLOuc7gM5qRgdSbpmZpMePRnnOcuR6SMQIFr0igBKMutCki7Zt6EnAp4ACIJ/NCjLaSaQDxXRKksSZ12TLuAdd0W08kVBVdnUBEEpMJbGkwiwYS7W/mF7AB6DvnrJFRC5/A4CrHMkAE1+6ngM//ChawBR+cHhFwS6AJ4L0Bpdwq3M1QHUQINWqZxstUpwCOkR18SJj1wzLh8DgDASAPOBDJ2xls1qiaGowH/wxVblcySAtD7iVQBvGALiqDksy3JLM8SkOb4JjqXgjV1qW0pSlpNQDkV5d2ANQy8CPhgiFCXQABgD8+a9g+DNDQSGrEJRbvzLFcBIRJxUjBB+ExWVkqyew5zwX263j7E7GieVZgDMIkbfsuoxLIDVHbEnI4RYIyoaQ1NuQodUub4bjfr90b10BA1BO6A2LTF6wBPAnIzY07GDTwZ06E0DdUjSkQsYFJrRFFEMcq9nTsfsggQjjNdpDKdDGlcQPUpEsoYXykJcA7ALEnZJ5ipwlwmcSdFJQagQwSt09M78UQCrJGMXpRMFdSOKxyIiPuyU3WkQzMLqySZgF6UeohAQ66EtAzTw1YBoweQoywPgD30ibBbMgV2We4pCUBA7MCAKmiUTHlwrmwPIwYZxJnBzoMCJQV5r9ojw/4bQJyoaWhPSFM0SE+3vHh5f4LZmzOZ0FteVH6L2uG5rXVXee7uQ05wy2/NZvA8Gg1fO+rCRMC7gmzcBvPbcSyaYCgAJQ0ux2hff0fH7npfruAsUPsYSzSyCLr78+DE59CSAu0Tj1QdScA6cUhSjwPMAa5luFtAhLCegyBXg63p4VQD1SHMKuLWgt4VK32svJoA2dV4C/zJPS7XUxeoZA1xKLmb5pUvehd4Wq6n7FTM3qkjSnATUFHMUeFuu5xZmkd4Mv6vBOaiwbRDxumfDnBAK4WuJjusIYzbzumXDmJQjeua4wuCXpI2fKdr7RgvsHJK37SKFVPWnP2cz6Ct3udzOQzVVIGkoLLB3Or9rEtH17t7Iv7GRGzFMUBnl4Bf+0XFXn7PDIhuXvybkgp7uHY/8uZzfv+P3m3QBJv4B+uHoeD+izxpisa1b36ZrAvSiYEo/eRjlELsf3Z9hAjAAFuDHIkYPJ4XM9L3D9IIvl6Ht+4ie2q/9fOhPyCcKbIoCiIApv6Mh1y/+PAF3pBfevocwSOm1hz425xPsbPj9NAvk/Bs7T3/tXP5wklridaLjh1+5Jybw9yWCDSpS3+//lX/qjsX5fb5d4s0cBeacgordd8xDwu4y/FQFyMy5+8oTCZXKfW7l/D4fxQRYQf9+PNFQqYzv/S/Bz7ABUMFYv0NZcWzfjfo59+SK+Rlx4OSb3PTTObNyfp/vFeWxgHDmLxtU+o1Xz+MHBZQ7Y1ZQ4XxSf/Rsfh/dDUgDBv3vzzT/BFQ38LCKx3fAMMKLP74DeiRQsLG7usdfSsKq6ReU8BL0WIKnWFi58RfS8LLsPA2/g30i4tXuExm7u69+H/kaa6yxxhprrBb/B+PCG54eosdOAAAAAElFTkSuQmCC',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
