import { type } from "os";

export type CandidateStatus = 'Applied' | 'Screening' | 'Technical' | 'Offer' | 'Hired' | 'Rejected';
export type EmploymentType = 'FULLTIME' | 'PART TIME' | 'FREELANCE';

export interface Company {
  name: string;
  department?: string;
  logo: string;
}

export interface Candidate {
  id: string;
  dateApplied: string;
  company: Company;
  type: EmploymentType;
  position: string;
  status: CandidateStatus;
  hasContact: boolean;
  hasEmail: boolean;
}

export const mockCandidates: Candidate[] = [
  {
    id: '#APL-0018',
    dateApplied: 'Oct 18, 2025, 02:00 PM',
    company: {
      name: 'Quantum Systems',
      department: 'Engineering',
      logo: '/companies/quantum.png'
    },
    type: 'FULLTIME',
    position: 'Full Stack Developer',
    status: 'Technical',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0017',
    dateApplied: 'Oct 17, 2025, 11:30 AM',
    company: {
      name: 'Enterprise Solutions',
      department: 'Backend Development',
      logo: '/companies/enterprise.png'
    },
    type: 'FULLTIME',
    position: 'Backend Engineer',
    status: 'Technical',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0016',
    dateApplied: 'Oct 16, 2025, 03:45 PM',
    company: {
      name: 'Global Tech Corp',
      department: 'Product',
      logo: '/companies/globaltech.png'
    },
    type: 'FULLTIME',
    position: 'Senior Product Manager',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0015',
    dateApplied: 'Oct 15, 2025, 09:30 AM',
    company: {
      name: 'TechVision Labs',
      department: 'Engineering',
      logo: '/companies/techvision.png'
    },
    type: 'FULLTIME',
    position: 'Senior Software Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0019',
    dateApplied: 'Oct 19, 2025, 10:20 AM',
    company: {
      name: 'StartupX',
      department: 'Engineering',
      logo: '/companies/startupx.png'
    },
    type: 'FULLTIME',
    position: 'Frontend Developer',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0014',
    dateApplied: 'Oct 14, 2025, 02:15 PM',
    company: {
      name: 'Digital Dynamics',
      department: 'Product Development',
      logo: '/companies/digital.png'
    },
    type: 'FULLTIME',
    position: 'Product Manager',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0013',
    dateApplied: 'Oct 12, 2025, 11:45 AM',
    company: {
      name: 'CloudScale Systems',
      department: 'Cloud Operations',
      logo: '/companies/cloudscale.png'
    },
    type: 'FREELANCE',
    position: 'DevOps Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0012',
    dateApplied: 'Oct 10, 2025, 03:20 PM',
    company: {
      name: 'Innovative Solutions',
      department: 'Mobile Development',
      logo: '/companies/innovative.png'
    },
    type: 'PART TIME',
    position: 'Mobile App Developer',
    status: 'Screening',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0011',
    dateApplied: 'Oct 8, 2025, 10:00 AM',
    company: {
      name: 'DataMetrics Corp',
      department: 'Data Science',
      logo: '/companies/datametrics.png'
    },
    type: 'FULLTIME',
    position: 'Data Scientist',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0010',
    dateApplied: 'Oct 7, 2025, 09:15 AM',
    company: {
      name: 'WebFront Design',
      department: 'UI/UX Team',
      logo: '/companies/webfront.png'
    },
    type: 'FREELANCE',
    position: 'Senior UI/UX Designer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0009',
    dateApplied: 'Oct 5, 2025, 02:45 PM',
    company: {
      name: 'SecureNet',
      department: 'Cybersecurity',
      logo: '/companies/securenet.png'
    },
    type: 'FULLTIME',
    position: 'Security Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0008',
    dateApplied: 'Oct 4, 2025, 11:30 AM',
    company: {
      name: 'AgileTech Solutions',
      department: 'Project Management',
      logo: '/companies/agiletech.png'
    },
    type: 'PART TIME',
    position: 'Scrum Master',
    status: 'Screening',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0007',
    dateApplied: 'Oct 3, 2025, 04:20 PM',
    company: {
      name: 'Content Kings',
      department: 'Content Marketing',
      logo: '/companies/contentkings.png'
    },
    type: 'FREELANCE',
    position: 'Content Strategist',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0006',
    dateApplied: 'Oct 2, 2025, 01:15 PM',
    company: {
      name: 'AI Innovations',
      department: 'Machine Learning',
      logo: '/companies/aiinnovations.png'
    },
    type: 'FULLTIME',
    position: 'ML Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0005',
    dateApplied: 'Oct 1, 2025, 10:45 AM',
    company: {
      name: 'Growth Accelerator',
      department: 'Marketing',
      logo: '/companies/growth.png'
    },
    type: 'PART TIME',
    position: 'Digital Marketing Specialist',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0004',
    dateApplied: 'Sep 30, 2025, 03:30 PM',
    company: {
      name: 'BlockTech',
      department: 'Blockchain Development',
      logo: '/companies/blocktech.png'
    },
    type: 'FREELANCE',
    position: 'Blockchain Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0025',
    dateApplied: 'Oct 31, 2025, 09:45 AM',
    company: {
      name: 'QuantumTech',
      department: 'Quantum Computing',
      logo: '/companies/quantum.png'
    },
    type: 'FULLTIME',
    position: 'Quantum Computing Researcher',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0024',
    dateApplied: 'Oct 30, 2025, 02:30 PM',
    company: {
      name: 'EcoSmart Solutions',
      department: 'Green Technology',
      logo: '/companies/ecosmart.png'
    },
    type: 'FULLTIME',
    position: 'Sustainability Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0023',
    dateApplied: 'Oct 29, 2025, 11:20 AM',
    company: {
      name: 'BioTech Innovations',
      department: 'Bioinformatics',
      logo: '/companies/biotech.png'
    },
    type: 'PART TIME',
    position: 'Bioinformatics Analyst',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0022',
    dateApplied: 'Oct 28, 2025, 04:15 PM',
    company: {
      name: 'RoboSys Corp',
      department: 'Robotics',
      logo: '/companies/robosys.png'
    },
    type: 'FULLTIME',
    position: 'Robotics Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0021',
    dateApplied: 'Oct 27, 2025, 10:30 AM',
    company: {
      name: 'VR Dimensions',
      department: 'Virtual Reality',
      logo: '/companies/vrdimensions.png'
    },
    type: 'FREELANCE',
    position: 'VR Experience Designer',
    status: 'Screening',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0020',
    dateApplied: 'Oct 26, 2025, 03:45 PM',
    company: {
      name: 'CyberGuard',
      department: 'Network Security',
      logo: '/companies/cyberguard.png'
    },
    type: 'FULLTIME',
    position: 'Network Security Architect',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0019',
    dateApplied: 'Oct 25, 2025, 01:15 PM',
    company: {
      name: 'CloudNative Systems',
      department: 'Cloud Architecture',
      logo: '/companies/cloudnative.png'
    },
    type: 'PART TIME',
    position: 'Cloud Solutions Architect',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0018',
    dateApplied: 'Oct 24, 2025, 11:45 AM',
    company: {
      name: 'DataViz Pro',
      department: 'Data Visualization',
      logo: '/companies/dataviz.png'
    },
    type: 'FREELANCE',
    position: 'Data Visualization Expert',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0017',
    dateApplied: 'Oct 23, 2025, 09:30 AM',
    company: {
      name: 'IoT Innovate',
      department: 'IoT Development',
      logo: '/companies/iotinnovate.png'
    },
    type: 'FULLTIME',
    position: 'IoT Solutions Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0016',
    dateApplied: 'Oct 22, 2025, 02:45 PM',
    company: {
      name: 'FinTech Solutions',
      department: 'Financial Technology',
      logo: '/companies/fintech.png'
    },
    type: 'PART TIME',
    position: 'Financial Systems Analyst',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0035',
    dateApplied: 'Oct 20, 2025, 09:00 AM',
    company: {
      name: 'MetaVerse Inc',
      department: 'AR/VR Development',
      logo: '/companies/metaverse.png'
    },
    type: 'FULLTIME',
    position: 'Senior AR Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0034',
    dateApplied: 'Oct 19, 2025, 10:30 AM',
    company: {
      name: 'AI Masters',
      department: 'Machine Learning',
      logo: '/companies/aimasters.png'
    },
    type: 'FULLTIME',
    position: 'AI Research Scientist',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0033',
    dateApplied: 'Oct 18, 2025, 02:15 PM',
    company: {
      name: 'CryptoTech',
      department: 'Blockchain',
      logo: '/companies/cryptotech.png'
    },
    type: 'FREELANCE',
    position: 'Smart Contract Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0032',
    dateApplied: 'Oct 17, 2025, 11:45 AM',
    company: {
      name: 'DataCore Analytics',
      department: 'Business Intelligence',
      logo: '/companies/datacore.png'
    },
    type: 'PART TIME',
    position: 'BI Analyst',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0031',
    dateApplied: 'Oct 16, 2025, 03:30 PM',
    company: {
      name: 'SecureCloud',
      department: 'Cloud Security',
      logo: '/companies/securecloud.png'
    },
    type: 'FULLTIME',
    position: 'Cloud Security Engineer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0030',
    dateApplied: 'Oct 15, 2025, 01:45 PM',
    company: {
      name: 'GameTech Studios',
      department: 'Game Development',
      logo: '/companies/gametech.png'
    },
    type: 'FREELANCE',
    position: 'Game Developer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0029',
    dateApplied: 'Oct 14, 2025, 10:20 AM',
    company: {
      name: 'UX Masters',
      department: 'Design',
      logo: '/companies/uxmasters.png'
    },
    type: 'PART TIME',
    position: 'UX Researcher',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0028',
    dateApplied: 'Oct 13, 2025, 04:15 PM',
    company: {
      name: 'DevOps Pro',
      department: 'Infrastructure',
      logo: '/companies/devopspro.png'
    },
    type: 'FULLTIME',
    position: 'DevOps Engineer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0027',
    dateApplied: 'Oct 12, 2025, 09:30 AM',
    company: {
      name: 'Mobile Innovators',
      department: 'Mobile Development',
      logo: '/companies/mobileinnovators.png'
    },
    type: 'FREELANCE',
    position: 'iOS Developer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0026',
    dateApplied: 'Oct 11, 2025, 02:45 PM',
    company: {
      name: 'Data Ethics AI',
      department: 'AI Ethics',
      logo: '/companies/dataethics.png'
    },
    type: 'FULLTIME',
    position: 'AI Ethics Researcher',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0085',
    dateApplied: 'Oct 31, 2025, 08:00 AM',
    company: {
      name: 'Neural Dynamics',
      department: 'Deep Learning',
      logo: '/companies/neural.png'
    },
    type: 'FULLTIME',
    position: 'Deep Learning Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0084',
    dateApplied: 'Oct 31, 2025, 08:15 AM',
    company: {
      name: 'Quantum Computing Labs',
      department: 'Research',
      logo: '/companies/quantum.png'
    },
    type: 'FULLTIME',
    position: 'Quantum Algorithm Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0083',
    dateApplied: 'Oct 31, 2025, 08:30 AM',
    company: {
      name: 'Green Energy Tech',
      department: 'Sustainability',
      logo: '/companies/green.png'
    },
    type: 'PART TIME',
    position: 'Environmental Data Analyst',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0082',
    dateApplied: 'Oct 31, 2025, 08:45 AM',
    company: {
      name: 'SpaceX Systems',
      department: 'Aerospace',
      logo: '/companies/space.png'
    },
    type: 'FULLTIME',
    position: 'Aerospace Software Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0081',
    dateApplied: 'Oct 31, 2025, 09:00 AM',
    company: {
      name: 'HealthTech Innovation',
      department: 'Medical Devices',
      logo: '/companies/health.png'
    },
    type: 'FREELANCE',
    position: 'Medical Device Programmer',
    status: 'Rejected',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0080',
    dateApplied: 'Oct 31, 2025, 09:15 AM',
    company: {
      name: 'EdgeAI Solutions',
      department: 'Edge Computing',
      logo: '/companies/edge.png'
    },
    type: 'FULLTIME',
    position: 'Edge AI Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0079',
    dateApplied: 'Oct 31, 2025, 09:30 AM',
    company: {
      name: 'Cybersecurity Elite',
      department: 'Security',
      logo: '/companies/cyber.png'
    },
    type: 'FULLTIME',
    position: 'Penetration Tester',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0078',
    dateApplied: 'Oct 31, 2025, 09:45 AM',
    company: {
      name: 'Smart City Tech',
      department: 'Urban Solutions',
      logo: '/companies/city.png'
    },
    type: 'PART TIME',
    position: 'IoT Systems Analyst',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0077',
    dateApplied: 'Oct 31, 2025, 10:00 AM',
    company: {
      name: 'RoboTech Industries',
      department: 'Robotics',
      logo: '/companies/robo.png'
    },
    type: 'FULLTIME',
    position: 'Robotics Control Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0076',
    dateApplied: 'Oct 31, 2025, 10:15 AM',
    company: {
      name: 'FinTech Revolution',
      department: 'Financial Systems',
      logo: '/companies/fintech.png'
    },
    type: 'FREELANCE',
    position: 'Blockchain Architect',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0075',
    dateApplied: 'Oct 31, 2025, 10:30 AM',
    company: {
      name: 'DataVerse Analytics',
      department: 'Big Data',
      logo: '/companies/dataverse.png'
    },
    type: 'FULLTIME',
    position: 'Big Data Engineer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0074',
    dateApplied: 'Oct 31, 2025, 10:45 AM',
    company: {
      name: 'AR Innovations',
      department: 'Augmented Reality',
      logo: '/companies/ar.png'
    },
    type: 'PART TIME',
    position: 'AR Experience Designer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0073',
    dateApplied: 'Oct 31, 2025, 11:00 AM',
    company: {
      name: 'Cloud Native Labs',
      department: 'Cloud Infrastructure',
      logo: '/companies/cloud.png'
    },
    type: 'FULLTIME',
    position: 'Cloud Infrastructure Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0072',
    dateApplied: 'Oct 31, 2025, 11:15 AM',
    company: {
      name: 'Neural Networks Inc',
      department: 'AI Research',
      logo: '/companies/neural.png'
    },
    type: 'FULLTIME',
    position: 'Neural Network Researcher',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0071',
    dateApplied: 'Oct 31, 2025, 11:30 AM',
    company: {
      name: 'Quantum Security',
      department: 'Cryptography',
      logo: '/companies/quantum.png'
    },
    type: 'FREELANCE',
    position: 'Quantum Cryptography Specialist',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0070',
    dateApplied: 'Oct 30, 2025, 02:00 PM',
    company: {
      name: 'BioInformatics Plus',
      department: 'Genomics',
      logo: '/companies/bio.png'
    },
    type: 'FULLTIME',
    position: 'Genomics Data Scientist',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0069',
    dateApplied: 'Oct 30, 2025, 02:15 PM',
    company: {
      name: 'Smart Factory Solutions',
      department: 'Industrial IoT',
      logo: '/companies/factory.png'
    },
    type: 'FULLTIME',
    position: 'Industrial IoT Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0068',
    dateApplied: 'Oct 30, 2025, 02:30 PM',
    company: {
      name: 'Digital Twin Tech',
      department: 'Simulation',
      logo: '/companies/twin.png'
    },
    type: 'PART TIME',
    position: 'Digital Twin Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0067',
    dateApplied: 'Oct 30, 2025, 02:45 PM',
    company: {
      name: 'Meta Systems',
      department: 'Virtual Reality',
      logo: '/companies/meta.png'
    },
    type: 'FULLTIME',
    position: 'Metaverse Engineer',
    status: 'Rejected',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0066',
    dateApplied: 'Oct 30, 2025, 03:00 PM',
    company: {
      name: 'Voice AI Labs',
      department: 'Speech Recognition',
      logo: '/companies/voice.png'
    },
    type: 'FREELANCE',
    position: 'Speech AI Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0065',
    dateApplied: 'Oct 30, 2025, 03:15 PM',
    company: {
      name: 'Autonomous Systems',
      department: 'Self-Driving',
      logo: '/companies/auto.png'
    },
    type: 'FULLTIME',
    position: 'Autonomous Vehicle Engineer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0064',
    dateApplied: 'Oct 30, 2025, 03:30 PM',
    company: {
      name: 'ML Operations',
      department: 'MLOps',
      logo: '/companies/mlops.png'
    },
    type: 'FULLTIME',
    position: 'MLOps Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0063',
    dateApplied: 'Oct 30, 2025, 03:45 PM',
    company: {
      name: 'Smart Grid Tech',
      department: 'Energy Systems',
      logo: '/companies/grid.png'
    },
    type: 'PART TIME',
    position: 'Smart Grid Developer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0062',
    dateApplied: 'Oct 30, 2025, 04:00 PM',
    company: {
      name: 'Quantum Games',
      department: 'Game Development',
      logo: '/companies/qgames.png'
    },
    type: 'FREELANCE',
    position: 'Quantum Game Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0061',
    dateApplied: 'Oct 30, 2025, 04:15 PM',
    company: {
      name: 'Brain Computer Interface',
      department: 'Neural Tech',
      logo: '/companies/brain.png'
    },
    type: 'FULLTIME',
    position: 'BCI Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0060',
    dateApplied: 'Oct 29, 2025, 09:00 AM',
    company: {
      name: 'Holographic Display',
      department: '3D Technology',
      logo: '/companies/holo.png'
    },
    type: 'FULLTIME',
    position: 'Holographic Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0059',
    dateApplied: 'Oct 29, 2025, 09:15 AM',
    company: {
      name: 'Nanotech Solutions',
      department: 'Nanotechnology',
      logo: '/companies/nano.png'
    },
    type: 'PART TIME',
    position: 'Nanotech Software Developer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0058',
    dateApplied: 'Oct 29, 2025, 09:30 AM',
    company: {
      name: 'Drone Systems',
      department: 'UAV Technology',
      logo: '/companies/drone.png'
    },
    type: 'FREELANCE',
    position: 'Drone Systems Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0057',
    dateApplied: 'Oct 29, 2025, 09:45 AM',
    company: {
      name: 'Quantum Materials',
      department: 'Materials Science',
      logo: '/companies/qmaterials.png'
    },
    type: 'FULLTIME',
    position: 'Quantum Materials Researcher',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0056',
    dateApplied: 'Oct 29, 2025, 10:00 AM',
    company: {
      name: 'Brain Wave Tech',
      department: 'Neurotechnology',
      logo: '/companies/brainwave.png'
    },
    type: 'FULLTIME',
    position: 'Neural Interface Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0055',
    dateApplied: 'Oct 29, 2025, 10:15 AM',
    company: {
      name: 'Smart Contact Lens',
      department: 'Wearable Tech',
      logo: '/companies/lens.png'
    },
    type: 'PART TIME',
    position: 'Embedded Systems Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0054',
    dateApplied: 'Oct 29, 2025, 10:30 AM',
    company: {
      name: 'Quantum Network',
      department: 'Quantum Internet',
      logo: '/companies/qnet.png'
    },
    type: 'FULLTIME',
    position: 'Quantum Network Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0053',
    dateApplied: 'Oct 29, 2025, 10:45 AM',
    company: {
      name: 'Bio Robotics',
      department: 'Soft Robotics',
      logo: '/companies/biorobo.png'
    },
    type: 'FREELANCE',
    position: 'Soft Robotics Engineer',
    status: 'Rejected',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0052',
    dateApplied: 'Oct 29, 2025, 11:00 AM',
    company: {
      name: 'Neuralink Systems',
      department: 'Brain-Machine Interface',
      logo: '/companies/neuralink.png'
    },
    type: 'FULLTIME',
    position: 'Neural Interface Architect',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0051',
    dateApplied: 'Oct 29, 2025, 11:15 AM',
    company: {
      name: 'Space Habitat Tech',
      department: 'Space Technology',
      logo: '/companies/habitat.png'
    },
    type: 'FULLTIME',
    position: 'Space Habitat Systems Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0050',
    dateApplied: 'Oct 29, 2025, 11:30 AM',
    company: {
      name: 'DNA Computing',
      department: 'Molecular Computing',
      logo: '/companies/dna.png'
    },
    type: 'PART TIME',
    position: 'DNA Computing Researcher',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0049',
    dateApplied: 'Oct 29, 2025, 11:45 AM',
    company: {
      name: 'Quantum Sensing',
      department: 'Quantum Technology',
      logo: '/companies/qsense.png'
    },
    type: 'FREELANCE',
    position: 'Quantum Sensor Developer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0048',
    dateApplied: 'Oct 29, 2025, 12:00 PM',
    company: {
      name: 'Brain Map Tech',
      department: 'Neuroscience',
      logo: '/companies/brainmap.png'
    },
    type: 'FULLTIME',
    position: 'Neural Mapping Engineer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0047',
    dateApplied: 'Oct 29, 2025, 12:15 PM',
    company: {
      name: 'Swarm Robotics',
      department: 'Multi-Robot Systems',
      logo: '/companies/swarm.png'
    },
    type: 'FULLTIME',
    position: 'Swarm Intelligence Engineer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0046',
    dateApplied: 'Oct 29, 2025, 12:30 PM',
    company: {
      name: 'Climate Tech AI',
      department: 'Climate Technology',
      logo: '/companies/climate.png'
    },
    type: 'PART TIME',
    position: 'Climate Model Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0003',
    dateApplied: 'June 1, 2020, 08:22 AM',
    company: {
      name: 'Mosciski Inc.',
      department: 'Creative Design Agency',
      logo: '/companies/mosciski.png'
    },
    type: 'FREELANCE',
    position: 'Intern UI Designer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0002',
    dateApplied: 'June 1, 2020, 08:22 AM',
    company: {
      name: 'Funk Inc.',
      department: 'IT Department',
      logo: '/companies/funk.png'
    },
    type: 'PART TIME',
    position: 'Junior UI Designer',
    status: 'Screening',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0001',
    dateApplied: 'June 1, 2020, 08:22 AM',
    company: {
      name: 'Highspeed Studios',
      department: 'Creative Design Agency',
      logo: '/companies/highspeed.png'
    },
    type: 'FULLTIME',
    position: 'Senior UX Designer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  // Additional candidates to reach 100+ with all statuses and types
  {
    id: '#APL-0100',
    dateApplied: 'Oct 20, 2025, 09:00 AM',
    company: {
      name: 'DataFlow Analytics',
      department: 'Data Engineering',
      logo: '/companies/dataflow.png'
    },
    type: 'FULLTIME',
    position: 'Data Engineer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0099',
    dateApplied: 'Oct 20, 2025, 10:15 AM',
    company: {
      name: 'CloudBridge Inc',
      department: 'Cloud Infrastructure',
      logo: '/companies/cloudbridge.png'
    },
    type: 'PART TIME',
    position: 'Cloud Architect',
    status: 'Screening',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0098',
    dateApplied: 'Oct 20, 2025, 11:30 AM',
    company: {
      name: 'AI Solutions Pro',
      department: 'AI Research',
      logo: '/companies/aisolutions.png'
    },
    type: 'FREELANCE',
    position: 'Machine Learning Engineer',
    status: 'Technical',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0097',
    dateApplied: 'Oct 20, 2025, 12:45 PM',
    company: {
      name: 'FinTech Innovations',
      department: 'Finance',
      logo: '/companies/fintech.png'
    },
    type: 'FULLTIME',
    position: 'Financial Analyst',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0096',
    dateApplied: 'Oct 19, 2025, 02:00 PM',
    company: {
      name: 'GreenTech Energy',
      department: 'Sustainability',
      logo: '/companies/greentech.png'
    },
    type: 'FULLTIME',
    position: 'Sustainability Engineer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0095',
    dateApplied: 'Oct 19, 2025, 03:15 PM',
    company: {
      name: 'MedTech Solutions',
      department: 'Healthcare',
      logo: '/companies/medtech.png'
    },
    type: 'PART TIME',
    position: 'Healthcare Developer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0094',
    dateApplied: 'Oct 19, 2025, 04:30 PM',
    company: {
      name: 'BlockChain Ventures',
      department: 'Blockchain',
      logo: '/companies/blockchain.png'
    },
    type: 'FREELANCE',
    position: 'Blockchain Developer',
    status: 'Applied',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0093',
    dateApplied: 'Oct 18, 2025, 09:45 AM',
    company: {
      name: 'CyberSecure Systems',
      department: 'Security',
      logo: '/companies/cybersecure.png'
    },
    type: 'FULLTIME',
    position: 'Security Analyst',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0092',
    dateApplied: 'Oct 18, 2025, 11:00 AM',
    company: {
      name: 'MobileFirst Apps',
      department: 'Mobile Development',
      logo: '/companies/mobilefirst.png'
    },
    type: 'FREELANCE',
    position: 'Mobile Developer',
    status: 'Technical',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0091',
    dateApplied: 'Oct 18, 2025, 12:15 PM',
    company: {
      name: 'E-Commerce Plus',
      department: 'E-Commerce',
      logo: '/companies/ecommerce.png'
    },
    type: 'PART TIME',
    position: 'E-Commerce Developer',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0090',
    dateApplied: 'Oct 17, 2025, 01:30 PM',
    company: {
      name: 'GameDev Studios',
      department: 'Game Development',
      logo: '/companies/gamedev.png'
    },
    type: 'FULLTIME',
    position: 'Game Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0089',
    dateApplied: 'Oct 17, 2025, 02:45 PM',
    company: {
      name: 'Social Media Hub',
      department: 'Social Media',
      logo: '/companies/socialhub.png'
    },
    type: 'PART TIME',
    position: 'Social Media Manager',
    status: 'Rejected',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0088',
    dateApplied: 'Oct 16, 2025, 10:00 AM',
    company: {
      name: 'Content Management Pro',
      department: 'Content',
      logo: '/companies/contentpro.png'
    },
    type: 'FREELANCE',
    position: 'Content Manager',
    status: 'Applied',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0087',
    dateApplied: 'Oct 16, 2025, 11:15 AM',
    company: {
      name: 'Video Streaming Co',
      department: 'Streaming',
      logo: '/companies/videostream.png'
    },
    type: 'FULLTIME',
    position: 'Streaming Engineer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0086',
    dateApplied: 'Oct 15, 2025, 12:30 PM',
    company: {
      name: 'IoT Innovations',
      department: 'IoT',
      logo: '/companies/iot.png'
    },
    type: 'FREELANCE',
    position: 'IoT Developer',
    status: 'Technical',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0085',
    dateApplied: 'Oct 15, 2025, 01:45 PM',
    company: {
      name: 'Robotics Labs',
      department: 'Robotics',
      logo: '/companies/robotics.png'
    },
    type: 'FULLTIME',
    position: 'Robotics Engineer',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0084',
    dateApplied: 'Oct 14, 2025, 03:00 PM',
    company: {
      name: 'AR VR Solutions',
      department: 'AR/VR',
      logo: '/companies/arvr.png'
    },
    type: 'PART TIME',
    position: 'AR/VR Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0083',
    dateApplied: 'Oct 14, 2025, 04:15 PM',
    company: {
      name: 'Education Tech',
      department: 'EdTech',
      logo: '/companies/edtech.png'
    },
    type: 'FREELANCE',
    position: 'EdTech Developer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0082',
    dateApplied: 'Oct 13, 2025, 09:30 AM',
    company: {
      name: 'TravelTech Solutions',
      department: 'Travel',
      logo: '/companies/traveltech.png'
    },
    type: 'FULLTIME',
    position: 'Travel App Developer',
    status: 'Applied',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0081',
    dateApplied: 'Oct 13, 2025, 10:45 AM',
    company: {
      name: 'Real Estate Pro',
      department: 'Real Estate',
      logo: '/companies/realestate.png'
    },
    type: 'PART TIME',
    position: 'Real Estate Tech Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0080',
    dateApplied: 'Oct 12, 2025, 12:00 PM',
    company: {
      name: 'FoodTech Delivery',
      department: 'Food Delivery',
      logo: '/companies/foodtech.png'
    },
    type: 'FREELANCE',
    position: 'Food Delivery App Developer',
    status: 'Technical',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0079',
    dateApplied: 'Oct 12, 2025, 01:15 PM',
    company: {
      name: 'Fitness Tech',
      department: 'Fitness',
      logo: '/companies/fitnesstech.png'
    },
    type: 'FULLTIME',
    position: 'Fitness App Developer',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0078',
    dateApplied: 'Oct 11, 2025, 02:30 PM',
    company: {
      name: 'Music Streaming Co',
      department: 'Music',
      logo: '/companies/musicstream.png'
    },
    type: 'PART TIME',
    position: 'Music Platform Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0077',
    dateApplied: 'Oct 11, 2025, 03:45 PM',
    company: {
      name: 'Photo Editing Pro',
      department: 'Creative',
      logo: '/companies/photoediting.png'
    },
    type: 'FREELANCE',
    position: 'Image Processing Engineer',
    status: 'Rejected',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0076',
    dateApplied: 'Oct 10, 2025, 09:00 AM',
    company: {
      name: 'Language Learning App',
      department: 'Education',
      logo: '/companies/language.png'
    },
    type: 'FULLTIME',
    position: 'Language App Developer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0075',
    dateApplied: 'Oct 10, 2025, 10:15 AM',
    company: {
      name: 'Weather Analytics',
      department: 'Meteorology',
      logo: '/companies/weather.png'
    },
    type: 'PART TIME',
    position: 'Weather App Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0074',
    dateApplied: 'Oct 9, 2025, 11:30 AM',
    company: {
      name: 'News Aggregator',
      department: 'Media',
      logo: '/companies/news.png'
    },
    type: 'FREELANCE',
    position: 'News Platform Developer',
    status: 'Technical',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0073',
    dateApplied: 'Oct 9, 2025, 12:45 PM',
    company: {
      name: 'Shopping Cart Pro',
      department: 'E-Commerce',
      logo: '/companies/shopping.png'
    },
    type: 'FULLTIME',
    position: 'E-Commerce Developer',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0072',
    dateApplied: 'Oct 8, 2025, 02:00 PM',
    company: {
      name: 'Video Conferencing Co',
      department: 'Communication',
      logo: '/companies/videoconf.png'
    },
    type: 'PART TIME',
    position: 'Video Conferencing Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0071',
    dateApplied: 'Oct 8, 2025, 03:15 PM',
    company: {
      name: 'Project Management Plus',
      department: 'Project Management',
      logo: '/companies/pmplus.png'
    },
    type: 'FREELANCE',
    position: 'PM Tool Developer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0070',
    dateApplied: 'Oct 7, 2025, 09:30 AM',
    company: {
      name: 'Task Manager Pro',
      department: 'Productivity',
      logo: '/companies/taskmanager.png'
    },
    type: 'FULLTIME',
    position: 'Productivity App Developer',
    status: 'Applied',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0069',
    dateApplied: 'Oct 6, 2025, 10:45 AM',
    company: {
      name: 'Note Taking App',
      department: 'Productivity',
      logo: '/companies/notes.png'
    },
    type: 'PART TIME',
    position: 'Note App Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0068',
    dateApplied: 'Oct 6, 2025, 12:00 PM',
    company: {
      name: 'Calendar Sync Co',
      department: 'Productivity',
      logo: '/companies/calendar.png'
    },
    type: 'FREELANCE',
    position: 'Calendar App Developer',
    status: 'Technical',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0067',
    dateApplied: 'Oct 5, 2025, 01:15 PM',
    company: {
      name: 'Email Client Pro',
      department: 'Communication',
      logo: '/companies/email.png'
    },
    type: 'FULLTIME',
    position: 'Email Client Developer',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0066',
    dateApplied: 'Oct 4, 2025, 02:30 PM',
    company: {
      name: 'Messaging Platform',
      department: 'Communication',
      logo: '/companies/messaging.png'
    },
    type: 'PART TIME',
    position: 'Messaging App Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: false
  },
  {
    id: '#APL-0065',
    dateApplied: 'Oct 4, 2025, 03:45 PM',
    company: {
      name: 'Voice Assistant Tech',
      department: 'AI',
      logo: '/companies/voice.png'
    },
    type: 'FREELANCE',
    position: 'Voice Assistant Developer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0064',
    dateApplied: 'Oct 3, 2025, 09:00 AM',
    company: {
      name: 'Translation Services',
      department: 'Language',
      logo: '/companies/translation.png'
    },
    type: 'FULLTIME',
    position: 'Translation App Developer',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0063',
    dateApplied: 'Oct 3, 2025, 10:15 AM',
    company: {
      name: 'Code Review Platform',
      department: 'Development Tools',
      logo: '/companies/codereview.png'
    },
    type: 'PART TIME',
    position: 'DevOps Engineer',
    status: 'Screening',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0062',
    dateApplied: 'Oct 2, 2025, 11:30 AM',
    company: {
      name: 'CI/CD Automation',
      department: 'DevOps',
      logo: '/companies/cicd.png'
    },
    type: 'FREELANCE',
    position: 'CI/CD Engineer',
    status: 'Technical',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0061',
    dateApplied: 'Oct 2, 2025, 12:45 PM',
    company: {
      name: 'Infrastructure as Code',
      department: 'DevOps',
      logo: '/companies/iac.png'
    },
    type: 'FULLTIME',
    position: 'Infrastructure Engineer',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0060',
    dateApplied: 'Oct 1, 2025, 02:00 PM',
    company: {
      name: 'Container Orchestration',
      department: 'DevOps',
      logo: '/companies/containers.png'
    },
    type: 'PART TIME',
    position: 'Kubernetes Engineer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0059',
    dateApplied: 'Sep 30, 2025, 03:15 PM',
    company: {
      name: 'Monitoring Solutions',
      department: 'DevOps',
      logo: '/companies/monitoring.png'
    },
    type: 'FREELANCE',
    position: 'Site Reliability Engineer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0058',
    dateApplied: 'Sep 29, 2025, 09:30 AM',
    company: {
      name: 'Database Optimization',
      department: 'Database',
      logo: '/companies/database.png'
    },
    type: 'FULLTIME',
    position: 'Database Administrator',
    status: 'Applied',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0057',
    dateApplied: 'Sep 29, 2025, 10:45 AM',
    company: {
      name: 'NoSQL Solutions',
      department: 'Database',
      logo: '/companies/nosql.png'
    },
    type: 'PART TIME',
    position: 'NoSQL Developer',
    status: 'Screening',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0056',
    dateApplied: 'Sep 28, 2025, 12:00 PM',
    company: {
      name: 'Graph Database Co',
      department: 'Database',
      logo: '/companies/graphdb.png'
    },
    type: 'FREELANCE',
    position: 'Graph Database Engineer',
    status: 'Technical',
    hasContact: false,
    hasEmail: true
  },
  {
    id: '#APL-0055',
    dateApplied: 'Sep 28, 2025, 01:15 PM',
    company: {
      name: 'Time Series DB',
      department: 'Database',
      logo: '/companies/timeseries.png'
    },
    type: 'FULLTIME',
    position: 'Time Series DB Engineer',
    status: 'Offer',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0054',
    dateApplied: 'Sep 27, 2025, 02:30 PM',
    company: {
      name: 'Search Engine Tech',
      department: 'Search',
      logo: '/companies/search.png'
    },
    type: 'PART TIME',
    position: 'Search Engine Developer',
    status: 'Hired',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0053',
    dateApplied: 'Sep 27, 2025, 03:45 PM',
    company: {
      name: 'Analytics Dashboard',
      department: 'Analytics',
      logo: '/companies/analytics.png'
    },
    type: 'FREELANCE',
    position: 'Analytics Developer',
    status: 'Rejected',
    hasContact: true,
    hasEmail: true
  },
  {
    id: '#APL-0052',
    dateApplied: 'Sep 26, 2025, 09:00 AM',
    company: {
      name: 'Business Intelligence',
      department: 'BI',
      logo: '/companies/bi.png'
    },
    type: 'FULLTIME',
    position: 'BI Developer',
    status: 'Applied',
    hasContact: true,
    hasEmail: false
  }
];