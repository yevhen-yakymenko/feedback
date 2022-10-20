import Box from '../Box';

export default function Section({ title, children }) {
  return (
    <Box as="section" mt="32px">
      <h1>{title}</h1>
      {children}
    </Box>
  );
}
