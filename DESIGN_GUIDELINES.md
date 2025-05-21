# Design Guidelines

{
  "designGuidelines": {
    "ColorSystem": {
      "PrimaryColor": "#007BFF",
      "SecondaryColor": "#6C757D",
      "AccentColor": "#17A2B8",
      "SuccessState": "#28A745",
      "ErrorState": "#DC3545",
      "WarningState": "#FFC107",
      "BackgroundColor": "#F8F9FA",
      "SurfaceColor": "#FFFFFF",
      "TextColor": {
        "PrimaryText": "#212529",
        "SecondaryText": "#6C757D",
        "OnPrimary": "#FFFFFF",
        "OnError": "#FFFFFF"
      }
    },
    "Typography": {
      "FontFamilies": {
        "PrimaryFont": "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
      },
      "FontSizes": {
        "Title": "24px",
        "Subtitle": "18px",
        "Body": "16px",
        "Caption": "12px"
      },
      "LineHeights": {
        "Normal": "1.5"
      },
      "FontWeights": {
        "Regular": "400",
        "Bold": "700"
      }
    },
    "Spacing": {
      "MarginAndPaddingScales": "8px, 16px, 24px, 32px, 40px",
      "GridSystem": "12 columns",
      "ComponentSpacing": "16px"
    },
    "Components": {
      "ButtonStyles": {
        "PrimaryButton": {
          "BackgroundColor": "#007BFF",
          "TextColor": "#FFFFFF",
          "BorderRadius": "4px"
        },
        "SecondaryButton": {
          "BackgroundColor": "#6C757D",
          "TextColor": "#FFFFFF",
          "BorderRadius": "4px"
        }
      },
      "InputStyles": {
        "BorderStyle": "solid 2px #6C757D",
        "BorderRadius": "4px",
        "Padding": "8px 12px"
      },
      "CardStyles": {
        "BackgroundColor": "#FFFFFF",
        "Shadow": "0 2px 4px rgba(0,0,0,0.1)",
        "BorderRadius": "4px"
      },
      "FormStyles": {
        "LabelTextColor": "#212529",
        "InputSpacing": "8px"
      },
      "NavigationStyles": {
        "BackgroundColor": "#007BFF",
        "LinkColor": "#FFFFFF",
        "HoverEffect": "opacity: 0.8"
      }
    },
    "Animations": {
      "Transitions": "200ms ease-in-out",
      "HoverEffects": "transform: scale(1.05)",
      "LoadingStates": "spinner or progress bar animation",
      "PageTransitions": "fade-in / fade-out 300ms"
    },
    "ResponsiveDesign": {
      "Breakpoints": {
        "Small": "576px",
        "Medium": "768px",
        "Large": "992px",
        "ExtraLarge": "1200px"
      },
      "MobileFirstApproach": true,
      "GridSystem": "based on 12 columns",
      "ComponentAdaptations": {
        "Buttons": "full-width on small screens",
        "Navigation": "hamburger menu on small screens",
        "Cards": "single column layout on small screens"
      }
    }
  },
  "pageSpecificGuidelines": {
    "loginPage": {
      "PrimaryAction": "Login Button",
      "SecondaryAction": "Forgot Password Link",
      "Background": "#F8F9FA"
    },
    "myPage": {
      "GreetingMessageStyle": {
        "FontSize": "24px",
        "FontWeight": "Bold",
        "Color": "#007BFF"
      },
      "ActionButtonStyle": "PrimaryButton"
    },
    "productDetailsPage": {
      "ProductTitleStyle": {
        "FontSize": "24px",
        "Color": "#212529"
      },
      "PriceStyle": {
        "FontSize": "18px",
        "Color": "#28A745",
        "FontWeight": "Bold"
      },
      "BuyButton": "PrimaryButton",
      "AddToWishlistButton": "AccentColor"
    }
  }
}